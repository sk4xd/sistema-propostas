import { IProposalUploadsRepository } from '@modules/proposals/repositories/IProposalUploadsRepository';
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { inject, injectable } from "tsyringe";


interface IRequest {
  id: number;
  upload_id: string
}

@injectable()
class DownloadUploadsUseCase {
  constructor(
    @inject("ProposalUploadsRepository")
    private proposalsUploadsRepository: IProposalUploadsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ id, upload_id }: IRequest): Promise<any> {
    let upload = await this.proposalsUploadsRepository.findById(id, upload_id);

    if (upload) {
     return await this.storageProvider.get(upload.upload_name, "uploads");
    }
  }
}

export { DownloadUploadsUseCase };

