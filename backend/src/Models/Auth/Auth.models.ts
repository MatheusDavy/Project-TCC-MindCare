import { prisma } from "../../Prisma/client";

// Types
import {
  UserCreateDTO,
  UserLoginDTO,
  ResetPasswordDTO,
} from "./Auth.types";

// Services
import { PasswordService } from "../../Services/password.service";

// Error
import { TokenProvider } from "../../Providers/Token.providers";
import { sendResetPasswordEmail } from "../../Services/send-reset-password-email";
import { ErrorProvider } from "../../Providers/ErrorMessage.provider";
import { NicknameSevice } from "../../Services/nickname.service";
import { getAvatarProfile } from "../../Services/get-avatar-photo";

export class AuthService {
  private passwordServices: PasswordService;
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;
  private nicknameService: NicknameSevice

  constructor() {
    this.passwordServices = new PasswordService();
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
    this.nicknameService = new NicknameSevice();
  }

  async register({ email, password, name }: UserCreateDTO) {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
      return this.handlerError.sendEmailAlreadyExistError();
    }

    const nickname = await this.nicknameService.generateNickname(name);

    // Create New User
    const hashedPassword = await this.passwordServices.hashPassword(password);
    const avatar = await getAvatarProfile(name);
    const user = await prisma.user.create({
      data: {
        name,
        nickname,
        email,
        password: hashedPassword,
        utilsInfo: {
          create: {
            avatar: avatar
          }
        },
        role: "USER",
      },
    });

    return await this.tokenProvider.generateToken(user.id);
  }

  async login({ email, password }: UserLoginDTO) {
    const userAlreadyExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!userAlreadyExist) {
      return this.handlerError.sendIncorrectUserOrPasswordError();
    }

    const verifyPassword = await this.passwordServices.validatePassword(
      password,
      userAlreadyExist.password
    );

    if (verifyPassword) {
      // Gerar Token
      const token = await this.tokenProvider.generateToken(userAlreadyExist.id);

      return { token };
    }

    return this.handlerError.sendIncorrectUserOrPasswordError();
  }

  async forgetPassword(email: string) {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // User Not Exist
    if (!userAlreadyExist) {
      return this.handlerError.sendEmailNotExistInSystem();
    }

    const token = await this.tokenProvider.generateToken(userAlreadyExist.id);
    const url =
      process.env.FRONT_APPLICATION_DOMAIN +
      "/auth/resetar-senha/?userId=" +
      token;
    await sendResetPasswordEmail(email, userAlreadyExist.name, url);
    return true;
  }

  async resetPassword({ password, token }: ResetPasswordDTO) {
    const dataToken = await this.tokenProvider
      .getTokenDatas(token)
      .catch((err) => {
        throw err;
      });

    if (!dataToken) {
      return this.handlerError.sendResetPasswordError();
    }

    if (dataToken !== undefined && typeof dataToken.sub === "string") {
      const user = await prisma.user.findFirst({
          where: {
            id: dataToken.sub,
          },
        });

      if (!user) {
        return this.handlerError.sendResetPasswordError();
      }

      const hashedPassword = await this.passwordServices.hashPassword(password);
      await prisma.user.update({
        where: {
          email: user?.email,
        },
        data: {
          password: hashedPassword,
        },
      });

      return true;
    }
  }
}
