import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { IProposalResponseDTO } from "@modules/proposals/dtos/IProposalResponseDTO";
import { ProposalMap } from '@modules/proposals/mapper/ProposalMap';
import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { inject, injectable } from "tsyringe";


@injectable()
class FindProposalUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalsRepository: IProposalsRepository
  ) {}
  async execute(id: number): Promise<IProposalResponseDTO> {
    const proposal = await this.proposalsRepository.findById(id);

    return ProposalMap.toDTO(proposal);
  }
}

export { FindProposalUseCase };

