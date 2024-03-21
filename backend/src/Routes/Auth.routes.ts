// Express
import { Router } from "express";

// Controller
import { AuthController } from "../Controllers/Auth.controller";

const AuthRoutes = Router()
const Controller = new AuthController()

AuthRoutes.post("/register", Controller.register)
AuthRoutes.post("/login", Controller.login)
AuthRoutes.post("/forget-password", Controller.forgetPassword)
AuthRoutes.patch("/reset-password", Controller.resetPassword)

export { AuthRoutes }