import { AppError } from "../Errors/App.erros";
import { prisma } from "../Prisma/client";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";

export class UserService {
  private tokenProvider: TokenProvider;

  constructor() {
    this.tokenProvider = new TokenProvider();
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

    throw new AppError(
      "Sessão expirada, faça login novamente para continuar",
      401
    );
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

    throw new AppError(
      "Sessão expirada, faça login novamente para continuar",
      401
    );
  }
}
