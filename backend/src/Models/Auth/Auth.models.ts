import { prisma } from "../../Prisma/client";

// Types
import { UserCreateDTO, UserLoginDTO } from "./Auth.types";

// Services
import { PasswordService } from "../../Services/password.service";
import { sign } from "jsonwebtoken";

// Error
import { AppError } from "../../Errors/App.erros";
import { TokenProvider } from "../../Providers/Token/Token.providers";

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

    const hashedPassword = await this.passwordServices.hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
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

    return { error: true };
  }

  async refreshToken(refresToken: string){
    return await this.tokenProvider.refreshedToken(refresToken)
  }
}
