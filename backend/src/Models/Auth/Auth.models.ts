import { prisma } from "../../Prisma/client";

// Types
import {
  UserCreateDTO,
  UserLoginDTO,
  UserCreateOAuth,
  ResetPasswordDTO,
} from "./Auth.types";

// Services
import { PasswordService } from "../../Services/password.service";

// Error
import { TokenProvider } from "../../Providers/Token.providers";
import { sendResetPasswordEmail } from "../../Utils/send-reset-password-email";
import { ErrorProvider } from "../../Providers/ErrorMessage.provider";

export class AuthService {
  private passwordServices: PasswordService;
  private tokenProvider: TokenProvider;
  private handlerError: ErrorProvider;

  constructor() {
    this.passwordServices = new PasswordService();
    this.tokenProvider = new TokenProvider();
    this.handlerError = new ErrorProvider();
  }

  async createUser({ email, password, name }: UserCreateDTO) {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
      return this.handlerError.sendEmailAlreadyExistError();
    }

    // Create New User
    const hashedPassword = await this.passwordServices.hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "USER",
      },
    });

    return await this.tokenProvider.generateToken(user.id);
  }

  async loginUser({ email, password }: UserLoginDTO) {
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

  async OAuthLogin({ email, name }: UserCreateOAuth) {
    const userAlreadyExist = await prisma.userOAuth.findUnique({
      where: {
        email,
      },
    });

    // User Already Exist
    if (userAlreadyExist) {
      return await this.tokenProvider.generateToken(userAlreadyExist.id);
    }

    // Create New User
    const userOAuth = await prisma.userOAuth.create({
      data: {
        name,
        email,
        role: "USER",
      },
    });

    return await this.tokenProvider.generateToken(userOAuth.id);
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
      "/auth/reset-password/?userId=" +
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
