import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, username, password, cellphone, location, phoneNumber, isAdmin } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      username,
      password,
      cellphone,
      location,
      phoneNumber,
      isAdmin
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
