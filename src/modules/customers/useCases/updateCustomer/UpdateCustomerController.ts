import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";


class UpdateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { name,
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
      observation } = request.body;

    const updateCustomerUseCase = container.resolve(UpdateCustomerUseCase);

    await updateCustomerUseCase.execute({
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
      state,
      district,
      city,
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

    return response.status(200).send();
  }
}

export { UpdateCustomerController };
