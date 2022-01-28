import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateInstituteUseCase } from "./CreateInstituteUseCase";


class CreateInstituteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { institute_name } = request.body;

    const createInstituteUseCase = container.resolve(CreateInstituteUseCase);

    await createInstituteUseCase.execute({
      institute_name
    });

    return response.status(201).send();
  }
}

export { CreateInstituteController };

