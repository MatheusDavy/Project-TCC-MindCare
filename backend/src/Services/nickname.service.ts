import { prisma } from "../Prisma/client";

export class NicknameSevice {
  constructor() {}

  async generateNickname(name: string) {
    let nickname = name.toLowerCase().replace(/\s+/g, ""); // Transforma o nome em minúsculas e remove espaços
    let count = 1;

    while (true) {
      const existingUser = await prisma.user.findUnique({
        where: { nickname },
      });
      if (!existingUser) {
        return nickname;
      }

      nickname = `${name.toLowerCase().replace(/\s+/g, "")}${count}`;
      count++;
    }
  }
}
