import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUploadUseCase } from "./deleteUploadUseCase";


class DeleteUploadController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, upload_id } = request.params;
    const deleteUploadUseCase = container.resolve(DeleteUploadUseCase);

    await deleteUploadUseCase.execute(Number(id), upload_id);
    
    return response.status(204).send();
  }
}

export { DeleteUploadController };

