import { Request, Response } from "express";
import { container } from "tsyringe";
import { getPage, getPerPage } from "typeorm-pagination";
import { ListAllInstitutesUseCase } from "./listAllInstitutesUseCase";


class ListAllInstitutesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllInstitutesUseCase = container.resolve(ListAllInstitutesUseCase);
    getPage(request);
    getPerPage(request);

    const institutes = await listAllInstitutesUseCase.execute();

    return response.json(institutes);
  }
}

export { ListAllInstitutesController };

