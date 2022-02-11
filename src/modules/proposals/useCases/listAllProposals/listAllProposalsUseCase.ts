import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllProposalsUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalsRepository: IProposalsRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(id: string): Promise<PaginationAwareObject> {
    const { isAdmin } = await this.usersRepository.findById(id);

    const proposals = await this.proposalsRepository.findAll(id, isAdmin);

    return proposals;
  }
}

export { ListAllProposalsUseCase };

