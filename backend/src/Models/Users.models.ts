import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";
import { User } from "../Types/User.types";

export class UserService {
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;
  private handlerSuccess: SuccessProvider;

  constructor() {
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
    this.handlerSuccess = new SuccessProvider();
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
          where: { id: dataToken.sub },
          include: { utilsInfo: true },
        })) ||
        (await prisma.userOAuth.findFirst({
          where: { id: dataToken.sub },
          include: { utilsInfo: true },
        }));

      return { ...user, password: "", id: "" };
    }

    return this.handlerError.sendExpiredSessionError();
  }

  async updateUser(token: string, datas: User) {
    try {
      const dataToken = await this.tokenProvider.getTokenDatas(token);
      if (dataToken === undefined || typeof dataToken.sub !== "string") {
        return this.handlerError.sendExpiredSessionError();
      }

      const user =
        (await prisma.user.findUnique({
          where: { id: dataToken.sub },
        })) ||
        (await prisma.userOAuth.findUnique({
          where: { id: dataToken.sub },
        }));

      if (user) {
        const utilsDatas: User = {
          avatar: datas.avatar,
          age: datas.age,
          city: datas.city,
          state: datas.state,
          document: datas.document,
          cep: datas.cep,
        };

        const updateData = {
          name: datas.name,
          email: datas.email,
          utilsInfo: user.utilsInfoId
            ? { update: utilsDatas }
            : { create: utilsDatas },
        };

        (await prisma.user.update({
          where: { id: user.id },
          data: updateData,
        })) ||
        (await prisma.userOAuth.update({
          where: { id: user.id },
          data: updateData,
        }));

        return this.handlerSuccess.sendUserSuccessfullyUpdated();
      }
    } catch (err) {
      return this.handlerError.sendCannotExectuActionError();
    }

    return this.handlerError.sendExpiredSessionError();
  }
}
