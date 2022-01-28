import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProposalUseCase } from "./findProposalByIdUseCase";


class FindProposalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const findProposalUseCase = container.resolve(FindProposalUseCase);

    const proposal = await findProposalUseCase.execute(Number(id));
    return response.json(proposal);
  }
}

export { FindProposalController };

