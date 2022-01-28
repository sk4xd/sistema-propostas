import { ProposalUpload } from "../infra/typeorm/entities/ProposalUploads";


interface IProposalUploadsRepository {
  create(proposal_id: number, upload_name: string): Promise<ProposalUpload>;
  findById(proposal_id: number, upload_id: string): Promise<ProposalUpload>;
  findAll(proposal_id: number): Promise<ProposalUpload[]>;
  delete(proposal_id: number, upload_id: string): Promise<void>;
}

export { IProposalUploadsRepository };

