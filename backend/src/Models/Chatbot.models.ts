import { AppError } from "../Errors/App.erros";
import { prisma } from "../Prisma/client";
import * as stringSimilarity from "string-similarity";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";

export class ChatbotService {
  private handlerError: ErrorProvider;

  constructor() {
    this.handlerError = new ErrorProvider();
  }

  async getResponse(question: string) {
    try {
      let maxRating = 0;
      let questionWithMaxRating = "";

      const allQuestions = await prisma.chatbot.findMany();
      const questions = allQuestions.map((item) => item.question);

      const result = stringSimilarity.findBestMatch(question, questions);
      result.ratings.forEach((rating: any) => {
        if (rating.rating > maxRating) {
          maxRating = rating.rating;
          questionWithMaxRating = rating.target;
        }
      });

      const response = allQuestions.filter(
        (item) => item.question === questionWithMaxRating
      );

      return { response: response[0] || null };
    } catch (err) {
      throw this.handlerError.sendNoExpecificResponseChatbotError();
    }
  }
}
