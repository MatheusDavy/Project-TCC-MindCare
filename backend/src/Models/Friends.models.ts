import { prisma } from "../Prisma/client";

// Providers
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
import { TokenProvider } from "../Providers/Token.providers";

// Utils
import { calcDifferenceBetweenDate } from "../Services/calc-diference-between-date";
import { NotificationsServices } from "./Notifications.models";

export class FriendsService {
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;
  private handlerSuccess: SuccessProvider;
  private notificationServices: NotificationsServices;

  constructor() {
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
    this.handlerSuccess = new SuccessProvider();
    this.notificationServices = new NotificationsServices();
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

    const findRequests = await prisma.friend.findMany({
      where: {
        status: "FRIEND",
        OR: [{ from: user.id }, { to: user.id }],
      },
      select: {
        to: true,
        from: true,
      },
    });

    const filteredFriends = findRequests
      .filter((friend) => friend.to !== user.id || friend.from !== user.id)
      .map((friend) => (friend.to !== user.id ? friend.to : friend.from))
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

    const friends = await prisma.user.findMany({
      where: {
        id: {
          in: filteredFriends,
        },
      },
      select: {
        name: true,
        nickname: true,
        utilsInfo: {
          select: {
            avatar: true,
          },
        },
      },
    });

    return friends;
  }

  async addFriend(token: string, nickname: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const userFriend = await prisma.user.findFirst({
      where: { nickname },
      select: { id: true, nickname: true },
    });

    if (!userFriend) {
      return this.handlerError.addFriendNotPossible(nickname);
    }

    const existUserRequest = await prisma.friend.findFirst({
      where: {
        from: dataToken.sub,
        to: userFriend.id,
      },
      select: { status: true },
    });

    if (!existUserRequest) {
      await prisma.friend.create({
        data: {
          status: "SENT",
          from: dataToken.sub,
          to: userFriend.id,
        },
      });

      await this.notificationServices.createNotificationFriendRequest(
        dataToken.sub,
        userFriend.id
      );

      return this.handlerSuccess.addFriendRequest();
    }

    if (existUserRequest.status == "NONE") {
      await prisma.friend.updateMany({
        where: {
          from: dataToken.sub,
          to: userFriend.id,
        },
        data: {
          status: "SENT",
        },
      });

      await this.notificationServices.createNotificationFriendRequest(
        dataToken.sub,
        userFriend.id
      );

      return this.handlerSuccess.addFriendRequest();
    }
  }

  async verifyUserFriend(
    fromId: string,
    token: string
  ): Promise<{ status: string } | any> {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }
    
    let status: string = "NONE";

    // If user has a pending friend request
    const friendRequestPending = await prisma.friend.findFirst({
      where: {
        from: fromId,
        to: dataToken.sub,
      },
      select: {
        status: true,
        recusedAt: true,
      },
    });

    if (friendRequestPending?.status == "SENT") {
      return { status: "PENDING" };
    }

    if (friendRequestPending?.status == "RECUSED") {
      return { status: "RECUSED" };
    }

    const friendsDatas = await prisma.friend.findFirst({
      where: {
        from: dataToken.sub,
        to: fromId,
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
          to: userRequested.id,
          from: dataToken.sub,
        },
      },
    });

    return this.handlerSuccess.cancelFriendRequest();
  }

  async getFriendRequests(token: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const resultsId = await prisma.friend.findMany({
      where: {
        AND: [
          {
            to: dataToken.sub,
            status: "SENT",
          },
        ],
      },
      select: {
        from: true
      }
    });

    if (resultsId.length == 0){
      return [];
    }

    const refactor = resultsId.map((result) => result.from)

    const friends = await prisma.user.findMany({
      where: {
        id: {
          in: refactor,
        },
      },
      select: {
        name: true,
        nickname: true,
        utilsInfo: {
          select: {
            avatar: true,
          },
        },
      },
    });

    return friends;
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
        recusedAt: new Date(),
      },
      where: {
        to: dataToken.sub,
        from: userRequested.id,
      },
    });

    console.log('recused')

    return this.handlerSuccess.cancelFriend();
  }

  async acceptFriend(token: string, nickname: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const userFriend = await prisma.user.findUnique({
      where: { nickname },
      select: { id: true, nickname: true },
    });

    if (!userFriend) {
      return this.handlerError.acceptFriendNotPossible(nickname);
    }

    await prisma.friend.updateMany({
      where: {
        to: dataToken.sub,
        from: userFriend.id,
        status: "SENT",
      },
      data: {
        status: "FRIEND",
      },
    });

    return this.handlerSuccess.acceptFriend();
  }
}
