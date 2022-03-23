import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateInstituteUseCase} from './UpdateInstituteUseCase';

class UpdateInstituteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const id = request.params.id;
    const { institute_name } = request.body;

    const updateInstituteUseCase = container.resolve(UpdateInstituteUseCase);

    await updateInstituteUseCase.execute({
      id,
      institute_name
    });

    return response.status(200).send();
  }
}

export { UpdateInstituteController };
