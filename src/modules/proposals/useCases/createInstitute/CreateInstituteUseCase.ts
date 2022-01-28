import { ICreateInstituteDTO } from "@modules/proposals/dtos/ICreateInstituteDTO";
import { IInstitutesRepository } from "@modules/proposals/repositories/IInstitutesRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class CreateInstituteUseCase {
  constructor(
    @inject("InstitutesRepository")
    private institutesRepository: IInstitutesRepository
  ) {}

  async execute({
    institute_name
  }: ICreateInstituteDTO): Promise<void> {

    await this.institutesRepository.create({
      institute_name
    });
  }
}

export { CreateInstituteUseCase };

