import { Router } from "express";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { CreateCustomerController } from "@modules/customers/useCases/createCustomer/CreateCustomerController";
import { ListAllCustomersController } from "@modules/customers/useCases/listAllCustomersUseCase/listAllCustomerController";
import { UpdateCustomerController } from "@modules/customers/useCases/updateCustomer/UpdateCustomerController";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();
const listAllCustomersController = new ListAllCustomersController();
const updateCustomerController = new UpdateCustomerController();

customersRoutes.post("/", ensureAuthenticated, createCustomerController.handle);

customersRoutes.put("/:id", ensureAuthenticated, updateCustomerController.handle);

customersRoutes.get("/", ensureAuthenticated, listAllCustomersController.handle);

export { customersRoutes };
