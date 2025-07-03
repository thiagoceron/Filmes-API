import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddFilmeToAtores1749681831328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('atores', new TableForeignKey({
            name: 'AtoresFilme', 
            columnNames: ['filme_id'],
            referencedTableName: 'filmes',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE', // Se um filme for deletado, seus atores relacionados também serão.
            onUpdate: 'CASCADE'  // Se o id de um filme mudar, atualiza aqui também.
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('atores', 'AtoresFilme');
    }

}
