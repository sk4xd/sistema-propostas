import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProposalUseCase } from "./CreateProposalUseCase";


class CreateProposalController {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id
    const { contract_type,
      operation_data,
      final_value,
      fee,
      comission_value,
      comission_percentage,
      contract_status,
      contract_upload,
      contract_description,
      institute_id,
      status_id,
      customer_id } = request.body;

    const createUserUseCase = container.resolve(CreateProposalUseCase);

    const proposal = await createUserUseCase.execute({
      contract_type,
      operation_data,
      final_value,
      fee,
      comission_value,
      comission_percentage,
      contract_status,
      contract_upload,
      contract_description,
      user_id,
      institute_id,
      status_id,
      customer_id
    });

    return response.status(201).json(proposal).send();
  }
}

export { CreateProposalController };

