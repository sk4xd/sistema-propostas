import { Request, Response } from "express";
import { container } from "tsyringe";
import { ChangeProposalStatusUseCase } from "./changeProposalStatusUseCase";


class ChangeProposalStatusController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const proposal = request.body;

    const changeProposalStatusUseCase = container.resolve(ChangeProposalStatusUseCase);

    await changeProposalStatusUseCase.execute({
      id,
      proposal
    });

    return response.status(204).send();
  }
}

export { ChangeProposalStatusController };

