import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";

export class FriendsService {
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;
  private handlerSuccess: SuccessProvider;

  constructor() {
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
    this.handlerSuccess = new SuccessProvider();
  }

  async getUserFriends(token: string) {
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

    if (!user) return this.handlerError.sendCannotExectuActionError();

    const search = {
      dateApproved: {
        not: null,
      },
    };

    const friends =
      (await prisma.userFriend.findMany({
        where: {
          ...search,
          idRequested: user.id,
        },
      })) ||
      (await prisma.userFriend.findMany({
        where: {
          ...search,
          idRequestedOAuth: user.id,
        },
      }));

    return friends;
  }

  async getUsers(search: string) {
    const prismSearch = {
      name: {
        contains: search,
      },
    };
    const users =
      (await prisma.user.findMany({
        where: { ...prismSearch },
      })) ||
      (await prisma.userOAuth.findMany({
        where: { ...prismSearch },
      }));

    return users;
  }

  async getPendingFriendRequest(token: string) {}
}
