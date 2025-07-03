import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAtores1749681673543 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'atores',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                    { name: 'nome', type: 'varchar' },
                    { name: 'data_nascimento', type: 'date' },
                    { name: 'nacionalidade', type: 'varchar' },
                    { name: 'biografia', type: 'text' },
                    { name: 'avatar', type: 'varchar', isNullable: true },
                    { name: 'filme_id', type: 'uuid' }, 
                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('atores');
    }

}
