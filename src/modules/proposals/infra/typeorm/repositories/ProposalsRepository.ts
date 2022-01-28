import { getRepository, Repository } from "typeorm";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { IProposalsRepository } from "@modules/proposals/repositories/IProposalsRepository";
import { Proposal } from "../entities/Proposal";


class ProposalsRepository implements IProposalsRepository {
  private repository: Repository<Proposal>;

  constructor() {
    this.repository = getRepository(Proposal);
  }

  async create({
    contract_type,
    operation_data,
    user_id,
    status_id,
    customer_id
  }: any): Promise<Proposal> {
    const proposal = this.repository.create({
      contract_type,
      operation_data,
      user_id,
      status_id,
      customer_id
    });

    await this.repository.save(proposal);

    return proposal;
  }

  async findByFilter(filter: string): Promise<any> {
    const proposal = await this.repository.findOne(filter);
    return proposal;
  }

  async findById(id: number): Promise<any> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findAll(): Promise<PaginationAwareObject> {
    const proposals = await this.repository.createQueryBuilder("proposals")
    .select(["proposal.id", 
            "proposal.contract_type", 
            "proposal.operation_data", 
            "proposal.reproval_description", 
            "proposal.final_value", 
            "proposal.fee", 
            "proposal.comission_value", 
            "proposal.comission_percentage", 
            "proposal.contract_status", 
            "proposal.contract_upload",
            "proposal.created_at"
          ])
          .from(Proposal, "proposal")
          .leftJoinAndSelect("proposal.user", "user", "user.id = proposal.user_id")
          .leftJoinAndSelect("proposal.status", "status", "status.id = proposal.status_id")
          .leftJoinAndSelect("proposal.customer", "customer", "customer.id = proposal.customer_id")
          .leftJoinAndSelect("proposal.institute", "institute", "institute.id = proposal.institute_id")
          .orderBy("proposal.id", "DESC")
          .paginate();

    return proposals;
  }

  async update({
    id,
    proposal
  }): Promise<void> {
    await this.repository.update(id, {
      customer_id: proposal.customer_id,
      institute_id: proposal.institute_id,
      status_id: proposal.status_id,
      comission_percentage: proposal.comission_percentage,
      comission_value: proposal.comission_value,
      contract_status: proposal.contract_status,
      contract_type: proposal.contract_type,
      fee: proposal.fee,
      final_value: proposal.final_value,
      operation_data: proposal.operation_data,
      reproval_description: proposal.reproval_description
    })
  }

  async updateContract(id, contract): Promise<void> {
    await this.repository.update(id, {
      contract_upload: contract
    })
  }
}

export { ProposalsRepository };
