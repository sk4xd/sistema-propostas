import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { IUpdateInstituteDTO } from "../dtos/IUpdateInstituteDTO";
import { Institute } from "../infra/typeorm/entities/Institute";


interface IInstitutesRepository {
  create(data: Institute): Promise<Institute>;
  findAll(): Promise<PaginationAwareObject>;
  update(data: IUpdateInstituteDTO): Promise<void>;
}

export { IInstitutesRepository };
