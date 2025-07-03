import { getCustomRepository } from "typeorm";
import Ator from "../typeorm/entities/Ator";
import AtoresRepository from "../typeorm/repositories/AtoresRepository";

export default class ListAtorService {
    public async execute(): Promise<Ator[]> {
        const atoresRepository = getCustomRepository(AtoresRepository);
        const atores = await atoresRepository.find({
            relations: ['filme']
        });
        return atores;
    }
}