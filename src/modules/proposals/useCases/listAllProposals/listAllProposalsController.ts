import { Request, Response } from "express";
import { container } from "tsyringe";
import { getPage, getPerPage } from "typeorm-pagination";
import { ListAllProposalsUseCase } from "./listAllProposalsUseCase";


class ListAllProposalsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllProposalsUseCase = container.resolve(ListAllProposalsUseCase);
    const { id } = request.user;
    const {
      proposal_id,
      contract_type,
      customer_id,
      proposal_status,
      contract_status,
      date
    } = request.query;
    getPage(request);
    getPerPage(request);

    const proposals = await listAllProposalsUseCase.execute({
      proposal_id,
      contract_type,
      customer_id,
      proposal_status,
      contract_status,
      id,
      date
    });

    return response.json(proposals);
  }
}

export { ListAllProposalsController };
