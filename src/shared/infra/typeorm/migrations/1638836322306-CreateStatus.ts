import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStatus1638836322306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "status",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true
                },
                {
                  name: "status_description",
                  type: "varchar",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                }
              ]
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("status");
    }

}
