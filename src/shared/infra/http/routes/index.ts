import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { passwordRoutes } from "./password.routes";
import { usersRoutes } from "./users.routes";
import { customersRoutes } from "./customers.routes";
import { proposalsRoutes } from "./proposals.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/customers", customersRoutes);
router.use("/proposals", proposalsRoutes);
router.use("/password", passwordRoutes);
router.use(authenticateRoutes);

export { router };
