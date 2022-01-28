import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";



class CreateCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
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

    const CreateCustomerController = container.resolve(CreateCustomerUseCase);

    await CreateCustomerController.execute({
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

    return response.status(201).send();
  }
}

export { CreateCustomerController };
