// Express
import { Router } from "express";
import { UsersController } from "../Controllers/Users.controller";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { NotificationsController } from "../Controllers/Notifications.controller";

// Controller
const UserController = new UsersController()
const NotificationController = new NotificationsController();

const UserRoutes = Router()

UserRoutes.get("/", AuthMiddleware.ensureAuthenticated, UserController.getUser)
UserRoutes.patch("/update-me", AuthMiddleware.ensureAuthenticated, UserController.updateUser)
UserRoutes.post("/nickname", UserController.verifyNickname)
UserRoutes.post("/find-users", AuthMiddleware.ensureAuthenticated, UserController.findManyUsers)
UserRoutes.get("/notifications", AuthMiddleware.ensureAuthenticated, NotificationController.getNotifications)

export { UserRoutes }