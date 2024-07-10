import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { TokenProvider } from "../Providers/Token.providers";

export class VideoServices {
  private handlerError: ErrorProvider;
  private tokenProvider: TokenProvider;

  constructor() {
    this.handlerError = new ErrorProvider();
    this.tokenProvider = new TokenProvider();
  }

  async markVideoAsWatched(token: string, idVideo: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    await prisma.videos.create({
      data: {
        id_video: idVideo,
        userId: dataToken.sub,
      },
    });

    return;
  }

  async markOffVideoAsWatched(token: string, idVideo: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const existingVideo = await prisma.videos.findMany({
      where: {
        id_video: idVideo,
        userId: dataToken.sub,
      },
    });

    if (!existingVideo) {
      throw new Error("Vídeo não encontrado para o usuário atual");
    }

    const deleteResult = await prisma.videos.deleteMany({
      where: {
        id_video: idVideo,
        userId: dataToken.sub,
      },
    });

    return deleteResult;
  }

  async getFriendsWhoWatched(token: string, idVideo: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const getFriends = await prisma.friend.findMany({
      where: {
        OR: [
          {
            from: dataToken.sub,
          },
          {
            to: dataToken.sub,
          },
        ],
        status: "FRIEND",
      },
      select: {
        from: true,
        to: true,
      },
    });

    let idFriends: string[] = getFriends
      .map((friend) =>
        friend.from === dataToken.sub ? friend.to : friend.from
      )
      .filter((id, index, self) => self.indexOf(id) === index);

    const friendsData = await prisma.videos.findMany({
      where: {
        id_video: idVideo,
        userId: { in: idFriends },
      },
      select: {
        userId: true,
      },
    });

    let idFriendsWatched: string[] = friendsData.map((data) => data.userId);

    const users = await prisma.user.findMany({
      where: {
        id: { in: idFriendsWatched },
      },
      select: {
        nickname: true,
        utilsInfo: {
          select: {
            avatar: true,
          },
        },
      },
    });

    return users;
  }

  async verifyVideoWasWacthed(token: string, idVideo: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const result = await prisma.videos.findFirst({
      where: {
        id_video: idVideo,
        userId: dataToken.sub,
      },
      select: {
        id_video: true,
        id: true,
      },
    });

    return result;
  }
}
