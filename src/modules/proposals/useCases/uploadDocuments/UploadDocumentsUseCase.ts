import { IProposalUploadsRepository } from "@modules/proposals/repositories/IProposalUploadsRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { inject, injectable } from "tsyringe";


interface IRequest {
  proposal_id: number;
  uploads_name: string[];
}

@injectable()
class UploadDocumentsUseCase {
  constructor(
    @inject("ProposalUploadsRepository")
    private proposalUploadsRepository: IProposalUploadsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}
  async execute({ proposal_id, uploads_name }: IRequest): Promise<void> {
    uploads_name.map(async (upload) => {
      await this.proposalUploadsRepository.create(proposal_id, upload);
      await this.storageProvider.save(upload, "uploads");
    });
  }
}

export { UploadDocumentsUseCase };

