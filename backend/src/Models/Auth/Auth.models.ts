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
import { AppError } from "../../Errors/App.erros";
import { TokenProvider } from "../../Providers/Token.providers";
import { sendResetPasswordEmail } from "../../Utils/send-reset-password-email";

export class AuthService {
  private passwordServices: PasswordService;
  private tokenProvider: TokenProvider;

  constructor() {
    this.passwordServices = new PasswordService();
    this.tokenProvider = new TokenProvider();
  }

  async createUser({ email, password, name }: UserCreateDTO) {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
      throw new AppError("Email já cadastrado", 400);
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
      throw new AppError("Usuário ou Senha incorretos", 400);
    }

    const verifyPassword = await this.passwordServices.validatePassword(
      password,
      userAlreadyExist.password
    );

    if (verifyPassword) {
      // Gerar Token
      const token = await this.tokenProvider.generateToken(userAlreadyExist.id);
      const refreshedToken = await this.tokenProvider.generateRefreshedToken(
        userAlreadyExist.id
      );

      return { token, refreshedToken };
    }

    throw new AppError("Usuário ou Senha incorretos", 400);
  }

  async refreshToken(refresToken: string) {
    return await this.tokenProvider.refreshedToken(refresToken);
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
      throw new AppError("Email não existe em nosso sistema", 400);
    }

    const token = await this.tokenProvider.generateToken(userAlreadyExist.id);
    const url =
      process.env.FRONT_APPLICATION_DOMAIN +
      "/auth/reset-password/?userId=" +
      token;
    await sendResetPasswordEmail(email, userAlreadyExist.name, url);
    return "Email Enviado";
  }

  async resetPassword({ password, token }: ResetPasswordDTO) {
    const dataToken = await this.tokenProvider
      .getTokenDatas(token)
      .catch((err) => {
        throw err;
      });

    if (!dataToken) {
      throw new AppError(
        "Não foi possível alterar a senha desse usuário, envie novamente seu email para a restauração de senha!",
        503
      );
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
        throw new AppError(
          "Não foi possível alterar a senha desse usuário, por favor verifique seu email e acesse o link corretamente para a alteração de senha!",
          503
        );
      }

      const hashedPassword = await this.passwordServices.hashPassword(password);
      return await prisma.user.update({
        where: {
          email: user?.email,
        },
        data: {
          password: hashedPassword,
        },
      });
    }
  }
}