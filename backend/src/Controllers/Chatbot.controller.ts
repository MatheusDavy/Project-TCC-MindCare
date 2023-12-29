import { Request, Response } from "express";
import { ChatbotService } from "../Models/Chatbot.models"

const chatbotServices = new ChatbotService()

export class ChatbotController {
    constructor(){
    }

    async getResponse(req: Request, res: Response){
        const { question } = req.body;

        const result = await chatbotServices.getResponse(question);

        return res.status(200).json(result);
    }
}