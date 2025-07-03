import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Filme from "../typeorm/entities/Filme";
import FilmesRepository from "../typeorm/repositories/FilmesRepository";

interface IRequest {
    id: string;
    titulo: string;
    sinopse: string;
    data_lancamento: Date;
    genero: string;
    duracao: number;
}

export default class UpdateFilmeService {
    public async execute({ id, titulo, sinopse, data_lancamento, genero, duracao }: IRequest): Promise<Filme> {
        const filmesRepository = getCustomRepository(FilmesRepository);
        const filme = await filmesRepository.findOne(id);
        if (!filme) {
            throw new AppError('Film not found.');
        }
        const filmeExists = await filmesRepository.findByTitulo(titulo);
        if (filmeExists && titulo !== filme.titulo) {
            throw new AppError('There is already one film with this title.');
        }
        filme.titulo = titulo;
        filme.sinopse = sinopse;
        filme.data_lancamento = data_lancamento;
        filme.genero = genero;
        filme.duracao = duracao;

        await filmesRepository.save(filme);
        return filme;
    }
}