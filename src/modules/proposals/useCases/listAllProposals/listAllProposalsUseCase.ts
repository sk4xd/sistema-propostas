import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllProposalsUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalsRepository: IProposalsRepository
  ) {}

  async execute(): Promise<PaginationAwareObject> {
    const proposals = await this.proposalsRepository.findAll();

    return proposals;
  }
}

export { ListAllProposalsUseCase };

