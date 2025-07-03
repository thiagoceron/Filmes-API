import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import AtoresRepository from "../typeorm/repositories/AtoresRepository";

interface IRequest {
    id: string;
}

export default class DeleteAtorService {
    public async execute({ id }: IRequest): Promise<void> {
        const atoresRepository = getCustomRepository(AtoresRepository);
        const ator = await atoresRepository.findOne(id);

        if (!ator) {
            throw new AppError('Actor not found.');
        }

        await atoresRepository.remove(ator);
    }
}