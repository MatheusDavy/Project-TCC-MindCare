// Express
import { Router } from "express";

// Controller
import { AuthController } from "../Controllers/Auth..controller";

const AuthRoutes = Router()
const Controller = new AuthController()

AuthRoutes.post("/register", Controller.userCreate)
AuthRoutes.post("/login", Controller.userLogin)
AuthRoutes.post("/o-auth/login", Controller.OAuthLogin)
AuthRoutes.post("/refresh-token", Controller.refreshToken)
AuthRoutes.post("/forget-password", Controller.forgetPassword)
AuthRoutes.patch("/reset-password", Controller.resetPassword)

export { AuthRoutes }