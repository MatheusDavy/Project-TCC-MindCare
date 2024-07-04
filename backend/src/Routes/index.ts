import { Router } from "express";
import { AuthRoutes } from "./Auth.routes";
import { UserRoutes } from "./User.routes";
import { ChatbotRoutes } from "./Chatbot.routes";
import { FriendsRoutes } from "./Friends.routes";
import { LearnRoutes } from "./Learn.routes";

const routes = Router()

routes.use("/auth", AuthRoutes)
routes.use("/users", UserRoutes)
routes.use("/chatbot", ChatbotRoutes)
routes.use("/friends", FriendsRoutes)
routes.use('/learn', LearnRoutes)

export { routes }