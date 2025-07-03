import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Ator from "../typeorm/entities/Ator";
import AtoresRepository from "../typeorm/repositories/AtoresRepository";
import FilmesRepository from "@modules/filmes/typeorm/repositories/FilmesRepository";

interface IRequest {
    nome: string;
    data_nascimento: Date;
    nacionalidade: string;
    biografia: string;
    avatar?: string;
    filme_id: string;
}

export default class CreateAtorService {
    public async execute({ nome, data_nascimento, nacionalidade, biografia, avatar, filme_id }: IRequest): Promise<Ator> {
        const atoresRepository = getCustomRepository(AtoresRepository);
        const filmesRepository = getCustomRepository(FilmesRepository);

        const atorExists = await atoresRepository.findByNome(nome);
        if (atorExists) {
            throw new AppError('There is already one actor with this name.');
        }

        const filmeExists = await filmesRepository.findOne(filme_id);
        if (!filmeExists) {
            throw new AppError('Could not find any film with the given id.');
        }

        const ator = atoresRepository.create({
            nome,
            data_nascimento,
            nacionalidade,
            biografia,
            avatar,
            filme_id
        });

        await atoresRepository.save(ator);
        return ator;
    }
}