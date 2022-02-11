import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";

interface IRequest {
  id: number;
}

@injectable()
class DownloadContractUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalsRepository: IProposalsRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  async execute({ id }: IRequest): Promise<any> {
    const proposal = await this.proposalsRepository.findById(id);

    if (proposal.contract_upload) {
     return await this.storageProvider.get(proposal.contract_upload, "contract");
    }
  }
}

export { DownloadContractUseCase };
