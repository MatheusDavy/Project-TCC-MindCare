import { Router } from "express";
import { AuthRoutes } from "./Auth/Auth.routes";

const routes = Router()

routes.use("/auth", AuthRoutes)

export { routes }