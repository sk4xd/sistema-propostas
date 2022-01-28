import { Request, Response } from "express";
import { container } from "tsyringe";
import { getPage, getPerPage } from "typeorm-pagination";
import { ListAllProposalsUseCase } from "./listAllProposalsUseCase";


class ListAllProposalsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllProposalsUseCase = container.resolve(ListAllProposalsUseCase);
    getPage(request);
    getPerPage(request);

    const proposals = await listAllProposalsUseCase.execute();

    return response.json(proposals);
  }
}

export { ListAllProposalsController };
