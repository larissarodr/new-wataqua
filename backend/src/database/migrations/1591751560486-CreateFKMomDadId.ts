import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFKMomDadId1591751560486
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'stock',
      new TableForeignKey({
        name: 'fk_mom',
        columnNames: ['mom_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'stock',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'stock',
      new TableForeignKey({
        name: 'fk_dad',
        columnNames: ['dad_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'stock',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('stock', 'fk_mom');
    await queryRunner.dropForeignKey('stock', 'fk_dad');
  }
}
