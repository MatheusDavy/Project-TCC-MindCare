// Express
import { Router } from "express";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { FriendsController } from "../Controllers/Friends.controller";

// Controller
const Friend = new FriendsController()

const FriendsRoutes = Router()

FriendsRoutes.get("/", AuthMiddleware.ensureAuthenticated, Friend.getUserFriends)
FriendsRoutes.post("/add-friend", AuthMiddleware.ensureAuthenticated, Friend.addFriend)
FriendsRoutes.post("/cancel-friend-request", AuthMiddleware.ensureAuthenticated, Friend.cancelFriendRequest)
FriendsRoutes.post("/cancel-friend", AuthMiddleware.ensureAuthenticated, Friend.cancelFriend)

export { FriendsRoutes }