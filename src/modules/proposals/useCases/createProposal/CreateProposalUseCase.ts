import { ICreateProposalDTO } from "@modules/proposals/dtos/ICreateProposalDTO";
import { Proposal } from "@modules/proposals/infra/typeorm/entities/Proposal";
import { IProposalsRepository } from "@modules/proposals/repositories/IProposalsRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateProposalUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalRepository: IProposalsRepository
  ) {}

  async execute({
    contract_type,
    operation_data,
    user_id,
    status_id,
    customer_id
  }: ICreateProposalDTO): Promise<Proposal> {
    // fazer validacao 
    // const userAlreadyExists = await this.proposalRepository.findByEmail(email);

    // if (userAlreadyExists) {
    //   throw new AppError("User already exists");
    // }

  status_id = 1;

   return await this.proposalRepository.create({
      contract_type,
      operation_data,
      user_id,
      status_id,
      customer_id
    });
  }
}

export { CreateProposalUseCase };

