// Express
import { Router } from "express";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { LearnController as Controller } from "../Controllers/Learn.controller";

// Controller
const LearnController = new Controller();
const LearnRoutes = Router()

LearnRoutes.get("/get-friends-who-wacthed", AuthMiddleware.ensureAuthenticated, LearnController.getFriedsSeenVideo)
LearnRoutes.get("/mark-as-wacthed", AuthMiddleware.ensureAuthenticated, LearnController.markVideoAsWacthed)
LearnRoutes.get("/markoff-as-wacthed", AuthMiddleware.ensureAuthenticated, LearnController.markOffVideoAsWacthed)
LearnRoutes.get("/verify-video-was-wacthed", AuthMiddleware.ensureAuthenticated, LearnController.verifyVideoWasWacthed)

export { LearnRoutes }