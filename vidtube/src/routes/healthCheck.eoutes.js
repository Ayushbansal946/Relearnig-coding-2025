import { Router } from "express";
import { healthCheckController } from "../controllers/healthCheck.controllers.js";
//healthCheckController
const router = Router();
router.route("/").get( healthCheckController);
export default router;