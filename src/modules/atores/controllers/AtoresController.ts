import { Request, Response, NextFunction } from 'express';
import CreateAtorService from '../services/CreateAtorService';
import DeleteAtorService from '../services/DeleteAtorService';
import ListAtorService from '../services/ListAtorService';
import ShowAtorService from '../services/ShowAtorService';
import UpdateAtorService from '../services/UpdateAtorService';

export default class AtoresController {

    public async index(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const listAtores = new ListAtorService();
            const atores = await listAtores.execute();
            return response.json(atores);
        } catch (err) {
            next(err);
        }
    }

    public async show(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const showAtor = new ShowAtorService();
            const ator = await showAtor.execute({ id });
            return response.json(ator);
        } catch (err) {
            next(err);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { nome, data_nascimento, nacionalidade, biografia, avatar, filme_id } = request.body;
            const createAtor = new CreateAtorService();
            const ator = await createAtor.execute({ nome, data_nascimento, nacionalidade, biografia, avatar, filme_id });
            return response.json(ator);
        } catch (err) {
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { nome, data_nascimento, nacionalidade, biografia, filme_id } = request.body;
            const { id } = request.params;
            const updateAtor = new UpdateAtorService();
            const ator = await updateAtor.execute({ id, nome, data_nascimento, nacionalidade, biografia, filme_id });
            return response.json(ator);
        } catch (err) {
            next(err);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const deleteAtor = new DeleteAtorService();
            await deleteAtor.execute({ id });
            return response.json([]);
        } catch (err) {
            next(err);
        }
    }
}