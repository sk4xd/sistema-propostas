import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllUsersUseCase } from "./listAllUsersUseCase"
import { getPage, getPerPage } from "typeorm-pagination";

class ListAllUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllUsersUseCase = container.resolve(ListAllUsersUseCase);
    getPage(request);
    getPerPage(request);

    const users = await listAllUsersUseCase.execute();

    return response.json(users);
  }
}

export { ListAllUsersController };