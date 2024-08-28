import { readFileSync } from "fs";
import { prisma } from "../../Prisma/client";
import path from "path";

export default async function CreateChatbotQuestions () {
  const filePath = path.join(__dirname, 'data.json');
  const data = readFileSync(filePath, 'utf8');
  const questions = JSON.parse(data);

  for (const question of questions.mental_health_questions) {
    await prisma.chatbot.create({
      data: {
        response: question.answer
      },
    });
  }
}