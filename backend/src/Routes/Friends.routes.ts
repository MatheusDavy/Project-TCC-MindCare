// Express
import { Router } from "express";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { FriendsController } from "../Controllers/Friends.controller";

// Controller
const Friend = new FriendsController()

const FriendsRoutes = Router()

FriendsRoutes.get("/", AuthMiddleware.ensureAuthenticated, Friend.getUserFriends)
FriendsRoutes.get("/search", AuthMiddleware.ensureAuthenticated, Friend.getUsers)

export { FriendsRoutes }