// Express
import { Router } from "express";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { ChatbotController } from "../Controllers/Chatbot.controller";

// Controller
const Controller = new ChatbotController()

const ChatbotRoutes = Router()

ChatbotRoutes.post("/get-response", Controller.getResponse)
ChatbotRoutes.post("/create", Controller.createQuestion)
    
export { ChatbotRoutes }