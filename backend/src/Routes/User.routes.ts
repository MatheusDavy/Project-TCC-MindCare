// Express
import { Router } from "express";
import { UsersController } from "../Controllers/Users.controller";

// Controller
const UserController = new UsersController()

const UserRoutes = Router()

UserRoutes.get("/auth", UserController.getUserAuth)
UserRoutes.get("/", UserController.getUser)

export { UserRoutes }