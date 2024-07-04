import { prisma } from "../Prisma/client";

// Providers
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
import { TokenProvider } from "../Providers/Token.providers";

export class NotificationsServices {
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;
  private handlerSuccess: SuccessProvider;

  constructor() {
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
    this.handlerSuccess = new SuccessProvider();
  }

  async getNotifications(token: string) {
    const dataToken = await this.tokenProvider.getTokenDatas(token);
    if (dataToken === undefined || typeof dataToken.sub !== "string") {
      return this.handlerError.sendExpiredSessionError();
    }

    const notifications = await prisma.user.findUnique({
      where: { id: dataToken.sub },
      select: {
        notifications: true,
      },
    });

    return notifications;
  }

  async createNotificationFriendRequest(from: string, to: string) {
    const getUserInfo = await prisma.user.findUnique({
      where: {
        id: from,
      },
      include: {
        utilsInfo: true,
      },
    });

    await prisma.user.update({
      where: { id: to },
      data: {
        notifications: {
          create: [
            {
              title: "Pedido de Amizade",
              description: `O(a) ${getUserInfo?.name} te enviou uma solicitação de amizade para você`,
              avatar: getUserInfo?.utilsInfo?.avatar,
              read: false,
            },
          ],
        },
      },
    });
  }

  async friendAcceptedNotification(from: string, to: string) {}
  async friendDeclineNotification(from: string, to: string) {}
}
