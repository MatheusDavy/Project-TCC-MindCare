import { AppError } from "../Errors/App.erros";
import { prisma } from "../Prisma/client";
import dayjs from "dayjs";
import { sign, verify } from "jsonwebtoken";

export class TokenProvider {
  async generateToken(id: string) {
    const token = sign({}, process.env.SECRET_TOKEN!, {
      subject: id,
      expiresIn: "1 day",
    });

    return token;
  } 

  async generateRefreshedToken(userId: string) {
    await prisma.refreshToken.deleteMany({
      where: {
        userId: userId,
      },
    });

    const generateRefreshToken = await prisma.refreshToken.create({
      data: {
        userId,
        expiresIn: dayjs().add(1, "day").unix(), 
      },   
    }); 

    return generateRefreshToken;
  } 
  
  async refreshedToken(refreshed_token: string) {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refreshed_token,
      },
    });

    if (!refreshToken) {
      throw new AppError("Refresh Token Invalid", 500);
    }

    // Refresh Token
    const tokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));
    if (tokenExpired) {
      const refreshedToken = this.generateRefreshedToken(refreshToken.userId);
      return { refreshedToken };
    }

    const token = await this.generateToken(refreshToken.userId);

    return { token };
  }

  async getTokenDatas(token: string) {
    try {
      return verify(token, process.env.SECRET_TOKEN!);
    } catch (error) {
      throw new AppError('Sessão expirada', 401);
    }  
  }
}     