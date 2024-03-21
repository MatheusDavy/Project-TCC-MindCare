// Express
import { Router } from "express";
import { UsersController } from "../Controllers/Users.controller";
import * as AuthMiddleware from "../Middleware/Token.middleware";

// Controller
const UserController = new UsersController()

const UserRoutes = Router()

UserRoutes.get("/", AuthMiddleware.ensureAuthenticated, UserController.getUser)
UserRoutes.patch("/update-me", AuthMiddleware.ensureAuthenticated, UserController.updateUser)
UserRoutes.post("/nickname", UserController.verifyNickname)
UserRoutes.post("/find-users", AuthMiddleware.ensureAuthenticated, UserController.findManyUsers)
UserRoutes.post("/find-user", UserController.findUser)

export { UserRoutes }