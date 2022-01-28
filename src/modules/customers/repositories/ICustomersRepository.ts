
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { ICreateCustomerDTO } from "../dtos/ICreateCustomerDTO";
import { IUpdateCustomerDTO } from "../dtos/IUpdateCustomerDTO";
import { Customer } from "../infra/entities/Customer";


interface ICustomersRepository {
  create(data: ICreateCustomerDTO): Promise<void>;
  findByCpf(cpf: string): Promise<Customer>;
  findById(id: string): Promise<Customer>;
  findAll(): Promise<PaginationAwareObject>;
  update(data: IUpdateCustomerDTO): Promise<void>;
}

export { ICustomersRepository };
