import Ator from "@modules/atores/typeorm/entities/Ator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('filmes')
export default class Filme {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Ator, ator => ator.filme, {
        cascade: true, 
    })
    atores: Ator[]; 

    @Column()
    titulo: string;

    @Column('text')
    sinopse: string;

    @Column('date')
    data_lancamento: Date;

    @Column()
    genero: string;

    @Column('int')
    duracao: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}