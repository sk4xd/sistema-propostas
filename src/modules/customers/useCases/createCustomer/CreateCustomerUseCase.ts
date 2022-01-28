import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ICreateCustomerDTO } from "@modules/customers/dtos/ICreateCustomerDTO";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";

@injectable()
class CreateCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute({
    name,
    birthDate,
    identity,
    identityExpedition,
    cpfCnpj,
    mothersName,
    fathersName,
    civilState,
    partnersName,
    partnersCPF,
    cellphone,
    phoneNumber,
    cep,
    address,
    number,
    district,
    city,
    state,
    complement,
    firstReferralName,
    firstReferralPhone,
    secondReferralName,
    secondReferralPhone,
    job,
    placeOfBirth,
    ownHouse,
    email,
    observation
  }: ICreateCustomerDTO): Promise<void> {
    // const userAlreadyExists = await this.customersRepository.findByCpf(email);

    // if (userAlreadyExists) {
    //   throw new AppError("Customer already exists");
    // }

    await this.customersRepository.create({
      name,
      birthDate,
      identity,
      identityExpedition,
      cpfCnpj,
      mothersName,
      fathersName,
      civilState,
      partnersName,
      partnersCPF,
      cellphone,
      phoneNumber,
      cep,
      address,
      number,
      district,
      city,
      state,
      complement,
      firstReferralName,
      firstReferralPhone,
      secondReferralName,
      secondReferralPhone,
      job,
      placeOfBirth,
      ownHouse,
      email,
      observation
    });
  }
}

export { CreateCustomerUseCase };
