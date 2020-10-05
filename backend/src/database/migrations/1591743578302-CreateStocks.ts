import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateStockss1591743578302 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'stock',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'from_wild',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'collection_date',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'collection_location',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'collection_details',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'date_of_birth',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'has_parents',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'mom_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'dad_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'responsible_user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'relevance',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'comment',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'genotype',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'phenotype',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'number_of_males',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'number_of_females',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'number_of_hermaphrodites',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'number_of_juveniles',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'has_dna_sample',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'dna_sample_details',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'has_other_sample',
            type: 'boolean',
            isNullable: false,
          },
          {
            name: 'other_sample_details',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'amount_founder_fish',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'last_check_date',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'last_check_user_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'photo1',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'photo2',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stock');
  }
}
