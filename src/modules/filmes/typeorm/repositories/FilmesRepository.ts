import { EntityRepository, Repository } from "typeorm";
import Filme from "../entities/Filme";

@EntityRepository(Filme)
export default class FilmesRepository extends Repository<Filme> {


    public async findByTitulo(titulo: string): Promise<Filme | undefined> {
        const filme = this.findOne({
            where: { titulo } 
        });
        return filme;
    }
}