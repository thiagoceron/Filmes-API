import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Filme from "../typeorm/entities/Filme";
import FilmesRepository from "../typeorm/repositories/FilmesRepository";

interface IRequest {
    id: string;
}

export default class ShowFilmeService {
    public async execute({ id }: IRequest): Promise<Filme> {
        const filmesRepository = getCustomRepository(FilmesRepository);
        const filme = await filmesRepository.findOne(id);
        if (!filme) {
            throw new AppError('Film not found.');
        }
        return filme;
    }
}