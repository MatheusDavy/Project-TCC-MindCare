import { AppError } from "../Errors/App.erros";
import { sign, verify } from "jsonwebtoken";

export class TokenProvider {
  async generateToken(id: string) {
    const token = sign({}, process.env.SECRET_TOKEN!, {
      subject: id,
      expiresIn: "1 day",
    });

    return token;
  } 

  async getTokenDatas(token: string) {
    try {
      return verify(token, process.env.SECRET_TOKEN!);
    } catch (error) {
      throw new AppError('Sessão expirada', 401);
    }  
  }
}     