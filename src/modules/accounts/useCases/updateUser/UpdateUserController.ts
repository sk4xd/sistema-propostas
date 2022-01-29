import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { name, email, password, cellphone, location, phoneNumber } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute({
      id,
      name,
      email,
      password,
      cellphone,
      location,
      phoneNumber
    });

    return response.status(200).send();
  }
}

export { UpdateUserController };
