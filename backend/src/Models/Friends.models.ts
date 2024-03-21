import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";
import { calcDifferenceBetweenDate } from "../Utils/calc-diference-between-date";

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

    const user = await prisma.user.findUnique({
      where: { id: dataToken.sub },
    });

    if (!user) return this.handlerError.sendCannotExectuActionError();

    const friends = await prisma.friend.findMany({
      where: {
        status: 'FRIEND',
        idRequested: user.id,
      },
    });

    return friends;
  }

  async addFriend(token: string, nickname: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const userFriend = await prisma.user.findUnique({
      where: { nickname },
      select: { id: true },
    });

    if (!userFriend) {
      return this.handlerError.addFriendNotPossible(nickname);
    }

    const existUserRequest = await prisma.friend.findFirst({
      where: {
        idRequested: userFriend.id,
        idRequest: dataToken.sub,
      },
      select: { status: true },
    });

    if (!existUserRequest) {
      await prisma.friend.create({
        data: {
          status: "SENT",
          idRequested: userFriend.id,
          idRequest: dataToken.sub,
        },
      });

      return this.handlerSuccess.addFriendRequest();
    }

    if (existUserRequest.status == "NONE") {
      await prisma.friend.updateMany({
        where: {
          idRequested: userFriend.id,
          idRequest: dataToken.sub,
        },
        data: {
          status: "SENT",
        },
      });

      return this.handlerSuccess.addFriendRequest();
    }
  }

  async verifyUserFriend(userRequested: string, token: string): Promise<{ status: string } | any> {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }
    let status: string = "NONE";

    // If user has a pending friend request
    const friendRequestPending = await prisma.friend.findFirst({
      where: {
        idRequested: dataToken.sub,
        idRequest: userRequested,
      },
      select: {
        status: true,
        recusedAt: true,
      },
    });

    if (friendRequestPending?.status == "SENT") {
      return { status: "PENDING" };
    }

    if (friendRequestPending?.status == 'RECUSED'){
      return { status: "RECUSED" };
    }

    const friendsDatas = await prisma.friend.findFirst({
      where: {
        idRequested: userRequested,
        idRequest: dataToken.sub,
      },
      select: {
        status: true,
        recusedAt: true,
      },
    });

    if (friendsDatas?.status) {
      status = friendsDatas.status;
    }

    if (friendsDatas?.recusedAt) {
      const today = new Date().toISOString().split("T")[0];
      const days = calcDifferenceBetweenDate(
        new Date(friendsDatas.recusedAt),
        today
      );
      status = days < 5 ? "RECUSED" : status;
    }

    return { status };
  }

  async cancelFriendRequest(token: string, nickname: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const userRequested = await prisma.user.findUnique({
      where: { nickname },
      select: { id: true },
    });

    // User not found
    if (!userRequested) {
      return this.handlerError.cancelFriendRequestNotPossible(nickname);
    }

    await prisma.friend.updateMany({
      data: {
        status: "NONE",
      },
      where: {
        AND: {
          idRequest: dataToken.sub,
          idRequested: userRequested.id,
        },
      },
    });

    return this.handlerSuccess.cancelFriendRequest();
  }

  async cancelFriend(token: string, nickname: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const userRequested = await prisma.user.findUnique({
      where: { nickname },
      select: { id: true },
    });

    // User not found
    if (!userRequested) {
      return this.handlerError.cancelFriendNotPossible();
    }

    await prisma.friend.updateMany({
      data: {
        status: "RECUSED",
      },
      where: {
        idRequest: userRequested.id,
        idRequested: dataToken.sub,
      },
    });

    return this.handlerSuccess.cancelFriend();
  }
}
