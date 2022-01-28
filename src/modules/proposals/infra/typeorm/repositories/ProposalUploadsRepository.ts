import { getRepository, Repository } from "typeorm";

import { IProposalUploadsRepository } from "@modules/proposals/repositories/IProposalUploadsRepository";

import { ProposalUpload } from "../entities/ProposalUploads";

class ProposalUploadsRepository implements IProposalUploadsRepository {
  private repository: Repository<ProposalUpload>;

  constructor() {
    this.repository = getRepository(ProposalUpload);
  }

  async create(proposal_id: number, upload_name: string): Promise<ProposalUpload> {
    const upload = this.repository.create({
     proposal_id,
     upload_name
    });

    await this.repository.save(upload);

    return upload;
  }

  async findAll(proposal_id: number): Promise<ProposalUpload[]> {
    const uploads = await this.repository.createQueryBuilder()
    .select(["proposalUpload.id", "proposalUpload.upload_name"])
    .from(ProposalUpload, "proposalUpload")
    .where("proposalUpload.proposal_id = :proposal_id", { proposal_id })
    .getMany();

    return uploads;
  }

  async findById(proposal_id: number, upload_id: string): Promise<ProposalUpload> {
    let upload = await this.repository.createQueryBuilder()
    .select(["proposalUpload.id", "proposalUpload.upload_name"])
    .from(ProposalUpload, "proposalUpload")
    .where('proposalUpload.id = :id', { id: upload_id })
    .andWhere('proposalUpload.proposal_id = :sid', { sid: proposal_id }).getOne();

    return upload;
  }

  async delete(proposal_id: number, upload_id: string): Promise<void> {
    await this.repository.createQueryBuilder()
    .delete()
    .from(ProposalUpload, "proposalUpload")
    .where('proposalUpload.id = :id', { id: upload_id })
    .andWhere('proposalUpload.proposal_id = :sid', { sid: proposal_id });
  }
}

export { ProposalUploadsRepository };
