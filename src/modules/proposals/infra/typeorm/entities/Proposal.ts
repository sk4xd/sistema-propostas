import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { Customer } from "@modules/customers/infra/entities/Customer";
import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Institute } from "./Institute";
import { Status } from "./Status";

@Entity("proposals")
class Proposal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  contract_type: string;

  @Column()
  operation_data: string;

  @Column()
  reproval_description: string;

  @Column()
  final_value: string;

  @Column()
  fee: string;

  @Column()
  comission_value: string;

  @Column()
  comission_percentage: string;

  @Column()
  contract_status: string;

  @Column()
  contract_upload: string;

  @Column()
  contract_description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => Institute)
  @JoinColumn({ name: "institute_id" })
  institute: Institute;

  @Column()
  institute_id: string;

  @ManyToOne(() => Status)
  @JoinColumn({ name: "status_id" })
  status: Status;

  @Column()
  status_id: number;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;

  @Column()
  customer_id: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Expose({ name: "contract_url" })
  contract_url(): string {
    switch (process.env.disk) {
      case "local":
        return `${process.env.APP_API_URL}/contract/${this.contract_upload}`;
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/contract/${this.contract_upload}`;
      default:
        return null;
    }
  }
}

export { Proposal };

