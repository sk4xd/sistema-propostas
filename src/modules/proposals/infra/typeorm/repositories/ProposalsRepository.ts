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

  async findAll(obj: any): Promise<PaginationAwareObject> {
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
          .where("proposal.user_id = :id", 
          { id: obj.id,
            contract_type: obj.contract_type, 
            proposal_id: obj.proposal_id, 
            customer_id: obj.customer_id, 
            proposal_status: obj.proposal_status, 
            contract_status: obj.contract_status, 
            date: obj.date})
          .andWhere("(:contract_type::text is null OR proposal.contract_type = :contract_type)") 
          .andWhere("(:proposal_id::text is null OR cast(proposal.id as text) = cast(:proposal_id as text))")
          .andWhere("(cast(:customer_id as text) is null OR cast(proposal.customer_id as text) = cast(:customer_id as text))")
          .andWhere("(cast(:proposal_status as text) is null OR cast(proposal.status_id as text) = cast(:proposal_status as text))")
          .andWhere("(cast(:contract_status as text) is null OR cast(proposal.contract_status as text) = cast(:contract_status as text))")
          .andWhere("(cast(:date as date) is null OR cast(proposal.created_at as date) = cast(:date as date))")
          .orderBy("proposal.id", "DESC")
          .paginate();

    return proposals;
  }

  async findAllAdmin(obj: any): Promise<PaginationAwareObject> {
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
          .where("(:contract_type::text is null OR proposal.contract_type = :contract_type)", 
          { contract_type: obj.contract_type, 
            proposal_id: obj.proposal_id, 
            customer_id: obj.customer_id, 
            proposal_status: obj.proposal_status, 
            contract_status: obj.contract_status, 
            date: obj.date})
          .andWhere("(:proposal_id::text is null OR cast(proposal.id as text) = cast(:proposal_id as text))")
          .andWhere("(cast(:customer_id as text) is null OR cast(proposal.customer_id as text) = cast(:customer_id as text))")
          .andWhere("(cast(:proposal_status as text) is null OR cast(proposal.status_id as text) = cast(:proposal_status as text))")
          .andWhere("(cast(:contract_status as text) is null OR cast(proposal.contract_status as text) = cast(:contract_status as text))")
          .andWhere("(cast(:date as date) is null OR cast(proposal.created_at as date) = cast(:date as date))")
          .orderBy("proposal.id", "DESC")
          .paginate();

    return proposals;
  }
  // async findAllAdmin(obj: any): Promise<PaginationAwareObject> {
  //   const proposals = await this.repository.query(
  //     "select prop.id from proposals prop " +
  //     "left join users u ON u.id = prop.user_id " +
  //     "left join status s on s.id  = prop.status_id " +
  //     "left join customers c on c.id  = prop.customer_id " +
  //     "left join institutes i on i.id = prop.institute_id " +
  //     "where (cast($1 as text) is null or cast(prop.contract_type as text) = cast($1 as text)) " +
  //     "and (cast($4 as text) is null or cast(prop.contract_status as text) = cast($4 as text)) " +
  //     "and (cast($3 as text) is null or cast(prop.status_id as text) = cast($3 as text)) " +
  //     "and (cast($5 as text) is null or cast(prop.created_at as text) = cast($5 as text)) " +
  //     "and (cast($2 as text) is null or cast(prop.customer_id as text) = cast($2 as text)) " +
  //     "order by prop.id desc", [obj.contract_type, obj.customer_id, obj.status_id, obj.contract_status, obj.date])

  //   return proposals;
  // }

  // AND (:idCod IS NULL OR tabela.id = : idCod)

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


