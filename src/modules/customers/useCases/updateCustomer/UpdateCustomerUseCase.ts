import { inject, injectable } from "tsyringe";
import { IUpdateCustomerDTO } from "@modules/customers/dtos/IUpdateCustomerDTO";
import { ICustomersRepository } from "@modules/customers/repositories/ICustomersRepository";

@injectable()
class UpdateCustomerUseCase {
  constructor(
    @inject("CustomersRepository")
    private customersRepository: ICustomersRepository
  ) {}

  async execute({
    id,
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
  }: IUpdateCustomerDTO): Promise<void> {

    await this.customersRepository.update({
      id,
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

export { UpdateCustomerUseCase };
