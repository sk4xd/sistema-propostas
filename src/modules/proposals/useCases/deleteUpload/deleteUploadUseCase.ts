import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';
import { IProposalUploadsRepository } from "@modules/proposals/repositories/IProposalUploadsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteUploadUseCase {
  constructor(
    @inject("ProposalUploadsRepository")
    private proposalsUploadsRepository: IProposalUploadsRepository,
    @inject("ProposalUploadsRepository")
    private proposalUploadsRepository: IProposalUploadsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}
  async execute(id: number, upload_id: string): Promise<void> {
    let upload = await this.proposalsUploadsRepository.findById(id, upload_id);

    if(upload) {
      await this.proposalUploadsRepository.delete(id, upload_id);

      await this.storageProvider.delete(upload.upload_name, 'uploads')
    }
  }
}

export { DeleteUploadUseCase };

