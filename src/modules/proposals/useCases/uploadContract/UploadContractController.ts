import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadContractUseCase } from "./UploadContractUseCase";


class UploadContractController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const contract_file = request.file.filename;

    const uploadContractUseCase = container.resolve(UploadContractUseCase);

    await uploadContractUseCase.execute({ proposal_id: id, contract_file });

    return response.status(204).send();
  }
}

export { UploadContractController };

