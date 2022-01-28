import { Status } from '@modules/proposals/infra/typeorm/entities/Status';
import { IStatusRepository } from '@modules/proposals/repositories/IStatusRepository';
import { inject, injectable } from "tsyringe";


@injectable()
class ListAllStatusUseCase {
  constructor(
    @inject("StatusRepository")
    private statusRepository: IStatusRepository
  ) {}

  async execute(): Promise<Status[]> {

    let status = await this.statusRepository.findAll();

    return status;
  }
}

export { ListAllStatusUseCase };

