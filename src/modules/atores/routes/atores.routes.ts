import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import AtoresController from '../controllers/AtoresController';
import multer from 'multer';
import uploadConfig from '@config/upload';
import AtoresAvatarController from '../controllers/AtoresAvatarController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const atoresRouter = Router();
const atoresController = new AtoresController();
const atoresAvatarController = new AtoresAvatarController();
const upload = multer(uploadConfig);
atoresRouter.use(isAuthenticated);


// Rota para listar todos os atores
atoresRouter.get('/', async (req, res, next) => {
    try {
        await atoresController.index(req, res, next);
    } catch (err) {
        next(err);
    }
});

// Rota para exibir um ator específico
atoresRouter.get('/:id', celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await atoresController.show(req, res, next);
    } catch (err) {
        next(err);
    }
});

// Rota para criar um novo ator
atoresRouter.post('/', celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        data_nascimento: Joi.date().iso().required(),
        nacionalidade: Joi.string().required(),
        biografia: Joi.string().required(),
        avatar: Joi.string().uri().allow(null, ''),
        filme_id: Joi.string().uuid().required()
    }
}), async (req, res, next) => {
    try {
        await atoresController.create(req, res, next);
    } catch (err) {
        next(err);
    }
});

// Rota para atualizar um ator
atoresRouter.put('/:id', celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    [Segments.BODY]: {
        nome: Joi.string().required(),
        data_nascimento: Joi.date().iso().required(),
        nacionalidade: Joi.string().required(),
        biografia: Joi.string().required(),
        filme_id: Joi.string().uuid().required()
    }
}), async (req, res, next) => {
    try {
        await atoresController.update(req, res, next);
    } catch (err) {
        next(err);
    }
});
atoresRouter.patch(
    '/avatar/:id',
    upload.single('avatar'), 
    async (req, res, next) => {
        try {
            await atoresAvatarController.update(req, res, next);
        } catch (err) {
            next(err);
        }
    },
);


atoresRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await atoresController.delete(req, res, next);
    } catch (err) {
        next(err);
    }
});

export default atoresRouter;