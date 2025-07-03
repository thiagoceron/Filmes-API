import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import FilmesRepository from "../typeorm/repositories/FilmesRepository";

interface IRequest {
    id: string;
}

export default class DeleteFilmeService {
    public async execute({ id }: IRequest): Promise<void> {
        const filmesRepository = getCustomRepository(FilmesRepository);
        const filme = await filmesRepository.findOne(id);
        if (!filme) {
            throw new AppError('Film not found.');
        }
        await filmesRepository.remove(filme);
    }
}