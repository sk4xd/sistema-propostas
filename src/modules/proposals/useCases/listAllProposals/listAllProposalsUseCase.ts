import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IProposalsRepository } from '@modules/proposals/repositories/IProposalsRepository';
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllProposalsUseCase {
  constructor(
    @inject("ProposalsRepository")
    private proposalsRepository: IProposalsRepository,
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    proposal_id,
    contract_type,
    customer_id,
    proposal_status,
    contract_status,
    id,
    date
  }): Promise<PaginationAwareObject> {
    const { isAdmin } = await this.usersRepository.findById(id);

    let proposals;

    proposal_id = proposal_id === 'null' ? null : proposal_id;
    contract_type = contract_type === 'null' ? null : contract_type;
    customer_id = customer_id === 'null' ? null : customer_id;
    proposal_status = proposal_status === 'null' ? null : proposal_status;
    contract_status = contract_status === 'null' ? null : contract_status;
    id = id === 'null' ? null : id;
    date = date === 'null' ? null : date;

    if (isAdmin) {
      proposals = await this.proposalsRepository.findAllAdmin({
        proposal_id,
        contract_type,
        customer_id,
        proposal_status,
        contract_status,
        id,
        date
      });
    } else {
      proposals = await this.proposalsRepository.findAll({
        proposal_id,
        contract_type,
        customer_id,
        proposal_status,
        contract_status,
        id,
        date,
        isAdmin
      });
    }

    return proposals;
  }
}

export { ListAllProposalsUseCase };

