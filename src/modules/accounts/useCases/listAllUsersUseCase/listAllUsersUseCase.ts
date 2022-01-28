import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllUsersUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(): Promise<PaginationAwareObject> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}

export { ListAllUsersUseCase };

