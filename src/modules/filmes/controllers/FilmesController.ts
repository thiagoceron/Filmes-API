import { Request, Response, NextFunction } from 'express';
import CreateFilmeService from '../services/CreateFilmeService';
import DeleteFilmeService from '../services/DeleteFilmeService';
import ListFilmeService from '../services/ListFilmeService';
import ShowFilmeService from '../services/ShowFilmeService';
import UpdateFilmeService from '../services/UpdateFilmeService';

export default class FilmesController {
    public async index(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const listFilmes = new ListFilmeService();
            const filmes = await listFilmes.execute();
            return response.json(filmes);
        } catch (err) {
            next(err);
        }
    }

    public async show(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const showFilme = new ShowFilmeService();
            const filme = await showFilme.execute({ id });
            return response.json(filme);
        } catch (err) {
            next(err);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { titulo, sinopse, data_lancamento, genero, duracao } = request.body;
            const createFilme = new CreateFilmeService();
            const filme = await createFilme.execute({ titulo, sinopse, data_lancamento, genero, duracao });
            return response.json(filme);
        } catch (err) {
            next(err);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { titulo, sinopse, data_lancamento, genero, duracao } = request.body;
            const { id } = request.params;
            const updateFilme = new UpdateFilmeService();
            const filme = await updateFilme.execute({ id, titulo, sinopse, data_lancamento, genero, duracao });
            return response.json(filme);
        } catch (err) {
            next(err);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { id } = request.params;
            const deleteFilme = new DeleteFilmeService();
            await deleteFilme.execute({ id });
            return response.json([]);
        } catch (err) {
            next(err);
        }
    }
}