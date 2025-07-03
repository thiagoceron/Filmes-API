import { getCustomRepository } from "typeorm";
import Filme from "../typeorm/entities/Filme";
import FilmesRepository from "../typeorm/repositories/FilmesRepository";

export default class ListFilmeService {
    public async execute(): Promise<Filme[]> {
        const filmesRepository = getCustomRepository(FilmesRepository);
        const filmes = await filmesRepository.find();
        return filmes;
    }
}