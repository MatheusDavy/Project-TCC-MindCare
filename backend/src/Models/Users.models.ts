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
          avatar: datas.avatar ? datas.avatar : null,
          age: datas.age ? datas.age : null,
          city: datas.city ? datas.city : null,
          state: datas.state ? datas.state : null,
          document: datas.document ? datas.document : null,
          cep: datas.cep ? datas.cep : null,
        };

        const updateData = {
          name: datas.name,
          email: datas.email,
          nickname: datas.nickname,
          utilsInfo: user.utilsInfoId
            ? { update: utilsDatas }
            : { create: utilsDatas },
        };

        if (user.role === "OAUTH_USER") {
          await prisma.userOAuth.update({
            where: {
              id: user.id,
            },
            data: updateData,
          });
        }

        if (user.role === "USER") {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: updateData,
          });
        }
        return this.handlerSuccess.sendUserSuccessfullyUpdated();
      }
    } catch (err) {
      console.log(err);
      return this.handlerError.sendCannotExectuActionError();
    }

    return this.handlerError.sendExpiredSessionError();
  }

  async verifyNickname(nickname: string) {
    const hasUser =
      (await prisma.user.findUnique({
        where: { nickname },
      })) ||
      (await prisma.userOAuth.findUnique({
        where: { nickname },
      }));

    if (hasUser) return false;

    return true;
  }

  async findManyUsers(search: string, token: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const selected = {
        nickname: true,
        name: true,
        utilsInfo: {
          select: {
            avatar: true
          }
        }
    }

    const users =
      (await prisma.user.findMany({
        where: {
          OR: [
            { name: { contains: search } },
            { nickname: { contains: search } },
          ],
          AND: [
            { id: {not: dataToken.sub }}
          ]
        },
        select: selected
      })) ||
      (await prisma.userOAuth.findMany({
        where: {
          OR: [
            { name: { contains: search } },
            { nickname: { contains: search } },
          ],
          AND: [
            { id: {not: dataToken.sub }}
          ]
        },
        select: selected
      }));

    return users.slice(0, 10);
  }
}
