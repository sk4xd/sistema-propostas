import { IInstitutesRepository } from '@modules/proposals/repositories/IInstitutesRepository';
import { inject, injectable } from "tsyringe";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";

@injectable()
class ListAllInstitutesUseCase {
  constructor(
    @inject("InstitutesRepository")
    private institutesRepository: IInstitutesRepository
  ) {}

  async execute(): Promise<PaginationAwareObject> {
    const institutes = await this.institutesRepository.findAll();

    return institutes;
  }
}

export { ListAllInstitutesUseCase };

