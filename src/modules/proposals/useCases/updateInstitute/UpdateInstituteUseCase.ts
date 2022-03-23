import { IInstitutesRepository } from '@modules/proposals/repositories/IInstitutesRepository';
import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUpdateInstituteDTO } from '@modules/proposals/dtos/IUpdateInstituteDTO';


@injectable()
class UpdateInstituteUseCase {
  constructor(
    @inject("InstitutesRepository")
    private institutesRepository: IInstitutesRepository
  ) {}

  async execute({
    id,
    institute_name
  }: IUpdateInstituteDTO): Promise<void> {
  
    await this.institutesRepository.update({
      id,
      institute_name
    });
  }
}

export { UpdateInstituteUseCase };

