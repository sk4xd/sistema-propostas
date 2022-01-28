import { Router } from "express";

import uploadConfig from "@config/upload";
import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";
import { ListAllUsersController } from "@modules/accounts/useCases/listAllUsersUseCase/listAllUsersController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";
import { ensureAdmin } from "@shared/infra/http/middlewares/ensureAdmin";
import { ProfileUserController } from "@modules/accounts/useCases/profileUserUseCase/ProfileUserController";
import { UpdateUserController } from "@modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const profileUserController = new ProfileUserController();
const listAllUsersController = new ListAllUsersController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", ensureAuthenticated, ensureAdmin, createUserController.handle);

usersRoutes.put("/:id", ensureAuthenticated, ensureAdmin, updateUserController.handle);

usersRoutes.get("/", ensureAuthenticated, ensureAdmin, listAllUsersController.handle);

usersRoutes.get("/profile", ensureAuthenticated, profileUserController.handle);

export { usersRoutes };
