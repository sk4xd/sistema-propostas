import { Request, Response } from "express";
import { container } from "tsyringe";
import { DownloadContractUseCase } from "./DownloadContractUseCase";

class DownloadContractController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id } = request.params;

    const downloadContractUseCase = container.resolve(DownloadContractUseCase);

    const download = await downloadContractUseCase.execute({ id: Number(id) });
    response.setHeader('Access-Control-Expose-Headers', 'Content-Disposition')
    response.download(download, function(error){
      console.log("Error : ", error)
    });
  }
}

export { DownloadContractController };
