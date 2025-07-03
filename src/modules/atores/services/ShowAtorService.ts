import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Ator from "../typeorm/entities/Ator";
import AtoresRepository from "../typeorm/repositories/AtoresRepository";

interface IRequest {
    id: string;
}

export default class ShowAtorService {
    public async execute({ id }: IRequest): Promise<Ator> {
        const atoresRepository = getCustomRepository(AtoresRepository);
        const ator = await atoresRepository.findOne(id, {
            relations: ['filme']
        });

        if (!ator) {
            throw new AppError('Actor not found.');
        }

        return ator;
    }
}