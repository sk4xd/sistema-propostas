import { IProposalUploadsRepository } from "@modules/proposals/repositories/IProposalUploadsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class DeleteUploadUseCase {
  constructor(
    @inject("ProposalUploadsRepository")
    private proposalUploadsRepository: IProposalUploadsRepository
  ) {}
  async execute(id: number, upload_id: string): Promise<void> {
    await this.proposalUploadsRepository.delete(id, upload_id);
  }
}

export { DeleteUploadUseCase };

