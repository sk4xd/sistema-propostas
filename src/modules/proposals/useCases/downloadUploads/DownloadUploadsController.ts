import { Request, Response } from "express";
import { container } from "tsyringe";
import { DownloadUploadsUseCase } from "./DownloadUploadsUseCase";

class DownloadUploadsController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id, upload_id } = request.params;

    const downloadUploadsUseCase = container.resolve(DownloadUploadsUseCase);

    let { Body, ContentType } = await downloadUploadsUseCase.execute({ id: Number(id), upload_id });
    response.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')
    response.setHeader('Content-Type', ContentType)
    response.send(Body)
  }
}

export { DownloadUploadsController };
