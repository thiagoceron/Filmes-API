import Filme from "@modules/filmes/typeorm/entities/Filme";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('atores')
export default class Ator {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Filme, filme => filme.atores)
    @JoinColumn({ name: 'filme_id' })
    filme: Filme;

    @Column()
    filme_id: string;

    @Column()
    nome: string;

    @Column('date')
    data_nascimento: Date;

    @Column()
    nacionalidade: string;

    @Column('text')
    biografia: string;

    @Column()
    avatar: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}