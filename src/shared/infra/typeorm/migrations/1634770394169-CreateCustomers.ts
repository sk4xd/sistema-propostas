import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomers1634770394169 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "customers",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "birthDate",
                  type: "varchar",
                },
                {
                  name: "identity",
                  type: "varchar",
                },
                {
                  name: "identityExpedition",
                  type: "varchar",
                },
                {
                  name: "cpfCnpj",
                  type: "varchar",
                  isUnique: true
                },
                {
                  name: "mothersName",
                  type: "varchar",
                },
                {
                  name: "fathersName",
                  type: "varchar",
                },
                {
                  name: "civilState",
                  type: "varchar"
                },
                {
                  name: "partnersName",
                  type: "varchar"
                },
                {
                  name: "partnersCPF",
                  type: "varchar",
                  isUnique: true
                },
                {
                  name: "cellphone",
                  type: "varchar"
                },
                {
                  name: "phoneNumber",
                  type: "varchar"
                },
                {
                  name: "cep",
                  type: "varchar"
                },
                {
                  name: "address",
                  type: "varchar"
                },
                {
                  name: "number",
                  type: "varchar"
                },
                {
                  name: "complement",
                  type: "varchar"
                },
                {
                  name: "firstReferralName",
                  type: "varchar"
                },
                {
                  name: "firstReferralPhone",
                  type: "varchar"
                },
                {
                  name: "secondReferralName",
                  type: "varchar"
                },
                {
                  name: "secondReferralPhone",
                  type: "varchar"
                },
                {
                  name: "job",
                  type: "varchar"
                },
                {
                  name: "placeOfBirth",
                  type: "varchar"
                },
                {
                  name: "ownHouse",
                  type: "boolean"
                },
                {
                  name: "email",
                  type: "varchar"
                },
                {
                  name: "district",
                  type: "varchar"
                },
                {
                  name: "city",
                  type: "varchar"
                },
                {
                  name: "state",
                  type: "varchar"
                },
                {
                  name: "observation",
                  type: "varchar"
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()"
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}
