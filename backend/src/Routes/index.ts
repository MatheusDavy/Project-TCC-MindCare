import { Router } from "express";
import { AuthRoutes } from "./Auth.routes";
import { UserRoutes } from "./User.routes";
import { ChatbotRoutes } from "./Chatbot.routes";
import { FriendsRoutes } from "./Friends.routes";

const routes = Router()

routes.use("/auth", AuthRoutes)
routes.use("/users", UserRoutes)
routes.use("/chatbot", ChatbotRoutes)
routes.use("/friends", FriendsRoutes)

export { routes }