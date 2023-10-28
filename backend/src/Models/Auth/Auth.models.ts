import { prisma } from "../../Prisma/client";
// Types
import { AuthDTO } from "./Auth.types";

// Services
import { PasswordService } from "../../Services/password.service";

// Error
import { AppError } from "../../Errors/App.erros";

export class AuthService {
  private passwordServices: PasswordService;

  constructor(){
    this.passwordServices = new PasswordService();
  }

  async createUser({ email, password, name }: AuthDTO) {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExist) {
        throw new AppError("Email já cadastrado", 400)
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
}
