import { IProposalDTO } from '@modules/proposals/dtos/IUploadDTO';
import { ProposalUpload } from '@modules/proposals/infra/typeorm/entities/ProposalUploads';
import { UploadMap } from '@modules/proposals/mapper/UploadMap';
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

  async execute(id: number): Promise<IProposalDTO[]> {
    const proposals = await this.proposalsUploadsRepository.findAll(id);

    return proposals.map(proposal => {
      return UploadMap.toDTO(proposal);
    });
  }
}

export { ListAllUploadsUseCase };

