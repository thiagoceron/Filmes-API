import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Filme from "../typeorm/entities/Filme";
import FilmesRepository from "../typeorm/repositories/FilmesRepository";

interface IRequest {
    titulo: string;
    sinopse: string;
    data_lancamento: Date;
    genero: string;
    duracao: number;
}

export default class CreateFilmeService {
    public async execute({ titulo, sinopse, data_lancamento, genero, duracao }: IRequest): Promise<Filme> {
        const filmesRepository = getCustomRepository(FilmesRepository);
        const filmeExists = await filmesRepository.findByTitulo(titulo);

        if (filmeExists) {
            throw new AppError('There is already one film with this title.');
        }


        const filme = filmesRepository.create({
            titulo,
            sinopse,
            data_lancamento,
            genero,
            duracao
        });

        await filmesRepository.save(filme);
        return filme;
    }
}