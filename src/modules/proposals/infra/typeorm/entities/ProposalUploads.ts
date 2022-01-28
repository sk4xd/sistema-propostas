import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Proposal } from "./Proposal";

@Entity("proposal_uploads")
class ProposalUpload {
  @PrimaryColumn()
  id: string;

  @Column()
  upload_name: string;

  @ManyToOne(() => Proposal)
  @JoinColumn({ name: "proposal_id" })
  customer: Proposal;

  @Column()
  proposal_id: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @Expose({ name: "upload_url" })
  upload_url(): string {
    switch (process.env.disk) {
      case "local":
        return `${process.env.APP_API_URL}/uploads/${this.upload_name}`;
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/uploads/${this.upload_name}`;
      default:
        return null;
    }
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ProposalUpload };

