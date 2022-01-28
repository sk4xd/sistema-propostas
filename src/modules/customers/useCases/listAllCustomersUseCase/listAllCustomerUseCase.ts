import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllCustomersUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute(): Promise<PaginationAwareObject> {
    const customers = await this.customersRepository.findAll();

    return customers;
  }
}

export { ListAllCustomersUseCase };

