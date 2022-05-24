import { IUpdateUserDTO } from "@modules/accounts/dtos/IUpdateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";


@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    name,
    email,
    password,
    cellphone,
    location,
    phoneNumber,
    isAdmin
  }: IUpdateUserDTO): Promise<void> {
    // const userAlreadyExists = await this.usersRepository.findByEmail(email);

    // if (userAlreadyExists) {
    //   throw new AppError("User already exists");
    // }

    if (!password) {
      throw new AppError("Must enter a password");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.update({
      id,
      name,
      email,
      cellphone,
      phoneNumber,
      location,
      password: passwordHash,
      isAdmin
    });
  }
}

export { UpdateUserUseCase };

