import { classToClass } from 'class-transformer';
import { IProposalResponseDTO } from "../dtos/IProposalResponseDTO";
import { Proposal } from "../infra/typeorm/entities/Proposal";

class ProposalMap {
  static toDTO(proposal: Proposal): IProposalResponseDTO {
    const proposalConverted = classToClass(proposal);

    return proposalConverted;
  }
}

export { ProposalMap }