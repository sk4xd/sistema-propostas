import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { Institute } from "../infra/typeorm/entities/Institute";


interface IInstitutesRepository {
  create(data: any): Promise<Institute>;
  findAll(): Promise<PaginationAwareObject>;
  update(data: any): Promise<void>;
}

export { IInstitutesRepository };
