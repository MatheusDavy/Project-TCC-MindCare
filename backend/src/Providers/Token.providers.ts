import dayjs from "dayjs";
import { AppError } from "../Errors/App.erros";
import { sign, verify } from "jsonwebtoken";
import { prisma } from "../Prisma/client";
import { Request } from "express";

export class TokenProvider {
  async generateToken(id: string) {
    const token = sign({}, process.env.SECRET_TOKEN!, {
      subject: id,
      expiresIn: "1 day",
    });

    return token;
  } 

  async generateRefreshToken (userId: string) {
    const expiresIn = dayjs().add(30, 'second').unix()

    const generateRefreshToken = await prisma.refreshToken.create({
      data: {
        userId: userId,
        expiresIn
      }
    })

    return generateRefreshToken
  }

  async getTokenDatas(token: string) {
    try {
      return verify(token, process.env.SECRET_TOKEN!);
    } catch (error) {
      throw new AppError('Sessão expirada', 401, 'UNAUTHORIZED');
    }  
  }

  async getTokenFromHeader(req: Request) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    return token;
  }
}     