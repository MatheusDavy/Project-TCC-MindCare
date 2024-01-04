import { AppError } from "../Errors/App.erros";
import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";

export class UserService {
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;

  constructor() {
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
  }

  async getUserAuth(token: string) {
    const dataToken = await this.tokenProvider
      .getTokenDatas(token)
      .catch((err) => {
        throw err;
      });

    if (dataToken !== undefined && typeof dataToken.sub === "string") {
      const user = await prisma.user.findFirst({
        where: {
          id: dataToken.sub,
        },
      });

      return true;
    }

    return this.handlerError.sendExpiredSessionError();
  }

  async getUser(token: string) {
    const dataToken = await this.tokenProvider
      .getTokenDatas(token)
      .catch((err) => {
        throw err;
      });

    if (dataToken !== undefined && typeof dataToken.sub === "string") {
      const user =
        (await prisma.user.findFirst({
          where: {
            id: dataToken.sub,
          },
        })) ||
        (await prisma.userOAuth.findFirst({
          where: {
            id: dataToken.sub,
          },
        }));

      return {
        ...user,
        id: "",
        password: "",
      };
    }

    return this.handlerError.sendExpiredSessionError();
  }
}
