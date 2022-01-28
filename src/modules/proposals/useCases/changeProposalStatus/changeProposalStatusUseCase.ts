import { IChangeProposalStatusDTO } from '@modules/proposals/dtos/IChangeProposalStatusDTO';
import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { inject, injectable } from "tsyringe";


@injectable()
class ChangeProposalStatusUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalsRepository: IProposalsRepository
  ) {}

  async execute({
    id,
    proposal
  }: IChangeProposalStatusDTO): Promise<void> {

    await this.proposalsRepository.update({
      id,
      proposal
    });
  }
}

export { ChangeProposalStatusUseCase };

