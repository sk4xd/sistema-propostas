import { ProposalUpload } from '@modules/proposals/infra/typeorm/entities/ProposalUploads';
import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { IProposalUploadsRepository } from '@modules/proposals/repositories/IProposalUploadsRepository';
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllUploadsUseCase {
  constructor(
    @inject("ProposalUploadsRepository")
    private proposalsUploadsRepository: IProposalUploadsRepository
  ) {}

  async execute(id: number): Promise<ProposalUpload[]> {
    const proposals = await this.proposalsUploadsRepository.findAll(id);

    return proposals;
  }
}

export { ListAllUploadsUseCase };

