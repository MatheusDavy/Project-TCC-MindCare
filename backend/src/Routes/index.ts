import { Router } from "express";
import { AuthRoutes } from "./Auth.routes";
import { UserRoutes } from "./User.routes";
import { ChatbotRoutes } from "./Chatbot.routes";

const routes = Router()

routes.use("/auth", AuthRoutes)
routes.use("/users", UserRoutes)
routes.use("/chatbot", ChatbotRoutes)

export { routes }