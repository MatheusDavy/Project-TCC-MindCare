import { Router } from "express";
import { AuthRoutes } from "./Auth/Auth.routes";
import { UserRoutes } from "./User/User.routes";

const routes = Router()

routes.use("/auth", AuthRoutes)
routes.use("/authenticated/", UserRoutes)

export { routes }