import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadDocumentsUseCase } from "./UploadDocumentsUseCase";


interface IFiles {
  filename: string;
}

class UploadDocumentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const uploads = request.files as IFiles[];

    const uploadDocumentsUseCase = container.resolve(UploadDocumentsUseCase);

    const uploads_name = uploads.map((file) => file.filename);

    await uploadDocumentsUseCase.execute({
      proposal_id: Number(id),
      uploads_name,
    });

    return response.status(201).send();
  }
}

export { UploadDocumentsController };

