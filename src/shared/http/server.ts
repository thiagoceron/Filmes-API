import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm';
import 'express-async-errors';
import {errors} from 'celebrate'
import uploadConfig from '@config/upload';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory))
app.use(routes);
app.use(errors());

app.use((error: Error, request: Request, response : Response, next: NextFunction)=>{
    console.log(error);
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: 'error',
            message: error.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error'
    });
});


app.listen(3333, () => {
    console.log('Server started on port 3333!');
})
