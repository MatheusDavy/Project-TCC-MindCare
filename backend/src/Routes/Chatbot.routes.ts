// Express
import { Router } from "express";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { ChatbotController } from "../Controllers/Chatbot.controller";

// Controller
const Controller = new ChatbotController()

const ChatbotRoutes = Router()

ChatbotRoutes.post("/get-response", AuthMiddleware.ensureAuthenticated, Controller.getResponse)
    
export { ChatbotRoutes }