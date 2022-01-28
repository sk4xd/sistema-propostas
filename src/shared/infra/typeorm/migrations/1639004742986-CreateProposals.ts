import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProposals1638834355234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "proposals",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  generationStrategy: 'increment',
                  isGenerated: true
                },
                {
                  name: "contract_type",
                  type: "varchar",
                },
                {
                  name: "operation_data",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "reproval_description",
                  type: "varchar",
                  isNullable: true
                },
                {
                  name: "final_value",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "fee",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "comission_value",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "comission_percentage",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "contract_status",
                  type: "int",
                  isNullable: true
                },
                {
                  name: "contract_upload",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "contract_description",
                  type: "varchar",
                  isNullable: true,
                },
                {
                  name: "user_id",
                  type: "uuid",
                },
                {
                  name: "institute_id",
                  type: "uuid",
                  isNullable: true
                },
                {
                  name: "status_id",
                  type: "int",
                },
                {
                  name: "customer_id",
                  type: "uuid"
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
                  name: "FKUser",
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  columnNames: ["user_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                  name: "FKCustomer",
                  referencedTableName: "customers",
                  referencedColumnNames: ["id"],
                  columnNames: ["customer_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                  name: "FKStatusProposal",
                  referencedTableName: "status",
                  referencedColumnNames: ["id"],
                  columnNames: ["status_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
                {
                  name: "FKProposalInstitute",
                  referencedTableName: "institutes",
                  referencedColumnNames: ["id"],
                  columnNames: ["institute_id"],
                  onDelete: "CASCADE",
                  onUpdate: "CASCADE",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("proposals");
    }
}
