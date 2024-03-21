import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";
import { User } from "../Types/User.types";
import { FriendsService } from "./Friends.models";

export class UserService {
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;
  private handlerSuccess: SuccessProvider;
  private friendService: FriendsService;

  constructor() {
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
    this.handlerSuccess = new SuccessProvider();
    this.friendService = new FriendsService();
  }

  async getUser(token: string) {
    const dataToken = await this.tokenProvider
      .getTokenDatas(token)
      .catch((err) => {
        throw err;
      });

    if (dataToken !== undefined && typeof dataToken.sub === "string") {
      const user = await prisma.user.findFirst({
        where: { id: dataToken.sub },
        include: { utilsInfo: true },
      });

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

      const user = await prisma.user.findUnique({
        where: { id: dataToken.sub },
        include: {
          utilsInfo: true
        }
      });

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
          utilsInfo: user.utilsInfo
            ? { update: utilsDatas }
            : { create: utilsDatas },
        };

        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: updateData,
        });
        return this.handlerSuccess.sendUserSuccessfullyUpdated();
      }
    } catch (err) {
      (err);
      return this.handlerError.sendCannotExectuActionError();
    }

    return this.handlerError.sendExpiredSessionError();
  }

  async verifyNickname(nickname: string) {
    const hasUser = await prisma.user.findUnique({
      where: { nickname },
    });

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
          avatar: true,
        },
      },
    };

    const users = await prisma.user.findMany({
      where: {
        OR: [
          { name: { contains: search } },
          { nickname: { contains: search } },
        ],
        AND: [{ id: { not: dataToken.sub } }],
      },
      select: selected,
    });

    return users.slice(0, 10);
  }

  async findUser(search: string, token: string) {
    const selected = {
      id: true,
      nickname: true,
      name: true,
      utilsInfo: {
        select: {
          avatar: true,
        },
      },
    };

    const user = await prisma.user.findUnique({
      where: { nickname: search },
      select: selected,
    });

    // If User Not Exist
    if (!user) return this.handlerError.sendError("not-found", 404);

    const { id, ...datas } = user;
    
    const friendData = await this.friendService.verifyUserFriend(user.id, token);

    ({ ...datas, ...friendData });

    return { ...datas, ...friendData };
  }
}
