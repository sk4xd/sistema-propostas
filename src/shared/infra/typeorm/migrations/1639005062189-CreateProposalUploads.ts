import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProposalUploads1638835611885 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "proposal_uploads",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "upload_name",
                  type: "varchar",
                },
                {
                  name: "proposal_id",
                  type: "int",
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                }
              ],
              foreignKeys: [
                {
                  name: "FKProposalUpload",
                  referencedTableName: "proposals",
                  referencedColumnNames: ["id"],
                  columnNames: ["proposal_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                }
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("proposal_uploads");
    }

}
