import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import FilmesController from '../controllers/FilmesController';
import isAuthenticated from '@shared/http/middlewares/isAuthenticated';

const filmesRouter = Router();
const filmesController = new FilmesController();
filmesRouter.use(isAuthenticated);

filmesRouter.get('/', async (req, res, next) => {
    try {
        await filmesController.index(req, res, next);
    } catch (err) {
        next(err);
    }
});

filmesRouter.get('/:id', celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await filmesController.show(req, res, next);
    } catch (err) {
        next(err);
    }
});

filmesRouter.post('/', celebrate({
    [Segments.BODY]: {
        titulo: Joi.string().required(),
        sinopse: Joi.string().required(),
        data_lancamento: Joi.date().iso().required(),
        genero: Joi.string().required(),
        duracao: Joi.number().integer().min(1).required()
    }
}), async (req, res, next) => {
    try {
        await filmesController.create(req, res, next);
    } catch (err) {
        next(err);
    }
});

filmesRouter.put('/:id', celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
    [Segments.BODY]: {
        titulo: Joi.string().required(),
        sinopse: Joi.string().required(),
        data_lancamento: Joi.date().iso().required(),
        genero: Joi.string().required(),
        duracao: Joi.number().integer().min(1).required()
    }
}), async (req, res, next) => {
    try {
        await filmesController.update(req, res, next);
    } catch (err) {
        next(err);
    }
});

filmesRouter.delete('/:id', celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await filmesController.delete(req, res, next);
    } catch (err) {
        next(err);
    }
});

export default filmesRouter;