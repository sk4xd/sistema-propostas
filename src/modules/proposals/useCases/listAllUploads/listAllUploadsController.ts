import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUploadsUseCase } from "./listAllUploadsUseCase";


class ListAllUploadsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const listAllUploadsUseCase = container.resolve(ListAllUploadsUseCase);

    const uploads = await listAllUploadsUseCase.execute(Number(id));

    return response.json(uploads);
  }
}

export { ListAllUploadsController };

