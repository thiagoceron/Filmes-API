import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Ator from "../typeorm/entities/Ator";
import AtoresRepository from "../typeorm/repositories/AtoresRepository";
import FilmesRepository from "@modules/filmes/typeorm/repositories/FilmesRepository";


interface IRequest {
    id: string;
    nome: string;
    data_nascimento: Date;
    nacionalidade: string;
    biografia: string;
    filme_id: string;
}

export default class UpdateAtorService {
    public async execute({ id, nome, data_nascimento, nacionalidade, biografia, filme_id }: IRequest): Promise<Ator> {
        const atoresRepository = getCustomRepository(AtoresRepository);
        const filmesRepository = getCustomRepository(FilmesRepository);

        const ator = await atoresRepository.findOne(id);
        if (!ator) {
            throw new AppError('Actor not found.');
        }

        const atorNomeExists = await atoresRepository.findByNome(nome);
        if (atorNomeExists && nome !== ator.nome) {
            throw new AppError('There is already one actor with this name.');
        }

        const filmeExists = await filmesRepository.findOne(filme_id);
        if (!filmeExists) {
            throw new AppError('Could not find any film with the given id.');
        }

        ator.nome = nome;
        ator.data_nascimento = data_nascimento;
        ator.nacionalidade = nacionalidade;
        ator.biografia = biografia;
        ator.filme_id = filme_id;

        await atoresRepository.save(ator);
        return ator;
    }
}