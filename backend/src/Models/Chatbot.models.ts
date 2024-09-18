import { prisma } from "../Prisma/client";
import * as stringSimilarity from "string-similarity";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";

export class ChatbotService {
  private handlerError: ErrorProvider;

  constructor() {
    this.handlerError = new ErrorProvider();
  }

  async getResponse(question: string) {
    const url = "http://localhost:1337/api/questions?populate=*"
    const token = process.env.STRAPI_TOKEN

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const responseJson = await res.json();

    let maxRating = 0.8;
    let questionWithMaxRating = "";

    const questions = responseJson.data.map((item: any) => {
      const { Questao } = item.attributes
      return Questao;
    });

    const results = await stringSimilarity.findBestMatch(question, questions);
    results.ratings.forEach((rating: any) => {
      if (rating.rating > maxRating) {
        maxRating = rating.rating;
        questionWithMaxRating = rating.target;
      }
    });

    const response = responseJson.data.filter(
      (item: any) => {
        const { Questao } = item.attributes
        if (Questao === questionWithMaxRating) return item;
      }
    );

    const result = response[0] || null

    if (!result) {
      await this.createQuestion(question);
    }

    if (!result.attributes.Resposta){
      return { response: null }
    }

    return { response: result.attributes.Resposta };
  }

  async createQuestion (question: string) {
    const url = "http://localhost:1337/api/questions"
    const token = process.env.STRAPI_TOKEN

    await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          Questao: question,
          Resposta: '',
        }
      })
    });

    return;
  }
}
