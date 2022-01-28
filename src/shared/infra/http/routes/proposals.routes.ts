import uploadConfig from "@config/upload";
import { ChangeProposalStatusController } from "@modules/proposals/useCases/changeProposalStatus/changeProposalStatusController";
import { CreateInstituteController } from "@modules/proposals/useCases/createInstitute/CreateInstituteController";
import { CreateProposalController } from "@modules/proposals/useCases/createProposal/CreateProposalController";
import { DeleteUploadController } from "@modules/proposals/useCases/deleteUpload/deleteUploadController";
import { DownloadContractController } from "@modules/proposals/useCases/downloadContract/DownloadContractController";
import { DownloadUploadsController } from "@modules/proposals/useCases/downloadUploads/DownloadUploadsController";
import { FindProposalController } from "@modules/proposals/useCases/findProposalById/findProposalByIdController";
import { ListAllInstitutesController } from "@modules/proposals/useCases/listAllnstitutes/listAllInstitutesController";
import { ListAllProposalsController } from "@modules/proposals/useCases/listAllProposals/listAllProposalsController";
import { ListAllStatusController } from "@modules/proposals/useCases/listAllStatus/listAllStatusController";
import { ListAllUploadsController } from "@modules/proposals/useCases/listAllUploads/listAllUploadsController";
import { UploadContractController } from "@modules/proposals/useCases/uploadContract/UploadContractController";
import { UploadDocumentsController } from "@modules/proposals/useCases/uploadDocuments/UploadDocumentsController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";
import multer from "multer";


const proposalsRoutes = Router();

const createProposalController = new CreateProposalController();
const uploadDocumentsController = new UploadDocumentsController();
const listAllProposalsController = new ListAllProposalsController();
const findProposalController = new FindProposalController();
const createInstituteController = new CreateInstituteController();
const listAllInstitutesController = new ListAllInstitutesController();
const uploadContractController = new UploadContractController();
const changeProposalStatusController = new ChangeProposalStatusController();
const listAllStatusController = new ListAllStatusController();
const downloadContractController = new DownloadContractController();
const listAllUploadsController = new ListAllUploadsController();
const downloadUploadsController = new DownloadUploadsController();
const deleteUploadController = new DeleteUploadController();

const upload = multer(uploadConfig);

proposalsRoutes.post("/", ensureAuthenticated, createProposalController.handle);

proposalsRoutes.get("/", ensureAuthenticated, listAllProposalsController.handle);

proposalsRoutes.get("/institutes", ensureAuthenticated, listAllInstitutesController.handle);

proposalsRoutes.post("/institutes", ensureAuthenticated, createInstituteController.handle);

proposalsRoutes.get("/status", ensureAuthenticated, listAllStatusController.handle);

proposalsRoutes.put("/:id", ensureAuthenticated, changeProposalStatusController.handle);

proposalsRoutes.get("/:id", ensureAuthenticated, findProposalController.handle);

proposalsRoutes.get("/:id/contract", ensureAuthenticated, downloadContractController.handle);

proposalsRoutes.get("/:id/uploads", ensureAuthenticated, listAllUploadsController.handle);

proposalsRoutes.get("/:id/uploads/:upload_id", ensureAuthenticated, downloadUploadsController.handle);

proposalsRoutes.delete("/:id/uploads/:upload_id", ensureAuthenticated, deleteUploadController.handle);

proposalsRoutes.patch(
  "/:id/contract",
  ensureAuthenticated,
  upload.single("contract"),
  uploadContractController.handle
);

proposalsRoutes.post(
  "/:id/uploads",
  ensureAuthenticated,
  upload.array("documents"),
  uploadDocumentsController.handle
);

export { proposalsRoutes };

