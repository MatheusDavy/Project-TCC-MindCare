// Express
import { Router } from "express";

// Controller
import { AuthController } from "../../Controllers/Auth/Auth..controller";

const AuthRoutes = Router()
const Controller = new AuthController()

AuthRoutes.post("/register", Controller.userCreate)

export { AuthRoutes }