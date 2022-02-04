import { ProposalUpload } from '@modules/proposals/infra/typeorm/entities/ProposalUploads';
import { classToClass } from "class-transformer";
import { IProposalDTO } from "../dtos/IUploadDTO";

class UploadMap {
  static toDTO({
    id,
    upload_name,
    upload_url
  }: ProposalUpload): IProposalDTO {
    const upload = classToClass({
      id,
      upload_name,
      upload_url
    });
    return upload;
  }
}

export { UploadMap };
