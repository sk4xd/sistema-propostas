import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { Proposal } from "../infra/typeorm/entities/Proposal";


interface IProposalsRepository {
  create(data: any): Promise<Proposal>;
  findById(id: number): Promise<Proposal>;
  findByFilter(name: string): Promise<any>;
  findAll(): Promise<PaginationAwareObject>;
  update(data: any): Promise<void>;
  updateContract(id, contract): Promise<void>;
}

export { IProposalsRepository };
