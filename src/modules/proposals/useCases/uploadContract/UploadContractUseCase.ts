import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { inject, injectable } from "tsyringe";


interface IRequest {
  proposal_id: string;
  contract_file: string;
}

@injectable()
class UploadContractUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalRepository: IProposalsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ proposal_id, contract_file }: IRequest): Promise<void> {
    const proposal = await this.proposalRepository.findById(proposal_id);

    if (proposal.contract_upload) {
      await this.storageProvider.delete(proposal.contract_upload, "avatar");
    }
    await this.storageProvider.save(contract_file, "contract");

    proposal.contract_upload = contract_file;

    await this.proposalRepository.updateContract(proposal.id, proposal.contract_upload);
  }
}

export { UploadContractUseCase };

