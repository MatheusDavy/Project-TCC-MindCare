import * as bcrypt from "bcrypt";

export class PasswordService {
  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
