import { EntityRepository, Repository } from "typeorm";
import Ator from "../entities/Ator";

@EntityRepository(Ator)
export default class AtoresRepository extends Repository<Ator> {
    public async findByNome(nome: string): Promise<Ator | undefined> {
        const ator = this.findOne({
            where: { nome }
        });
        return ator;
    }
}