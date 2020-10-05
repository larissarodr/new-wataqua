import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateFKUserStock1599512292079
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'stock',
      new TableForeignKey({
        name: 'fk_responsible_user',
        columnNames: ['responsible_user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'stock',
      new TableForeignKey({
        name: 'fk_last_check_user',
        columnNames: ['last_check_user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('stock', 'fk_responsible_user');
    await queryRunner.dropForeignKey('stock', 'fk_last_check_user');
  }
}
