import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllStatusUseCase } from "./listAllStatusUseCase";


class ListAllStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllStatusUseCase = container.resolve(ListAllStatusUseCase);

    const statuses = await listAllStatusUseCase.execute();

    return response.status(200).json(statuses).send();
  }
}

export { ListAllStatusController };

