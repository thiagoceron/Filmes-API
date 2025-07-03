import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateFilmes1749597037319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'filmes',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                    { name: 'titulo', type: 'varchar', isUnique: true }, 
                    { name: 'sinopse', type: 'text' },
                    { name: 'data_lancamento', type: 'date' },
                    { name: 'genero', type: 'varchar' },
                    { name: 'duracao', type: 'int' }, 
                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('filmes');
    }

}
