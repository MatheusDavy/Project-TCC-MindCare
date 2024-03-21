import { Request, Response } from "express";
import { UserService } from "../Models/Users.models";

const userServices = new UserService();

export class UsersController {
  constructor() {}

  async getUser(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const result = await userServices.getUser(token!);
    return res.status(201).json(result);
  }

  async updateUser(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const datas = req.body;
    const result = await userServices.updateUser(token!, datas);

    return res.status(201).json(result);
  }

  async verifyNickname(req: Request, res: Response) {
    const { nickname } = req.body;
    const result = await userServices.verifyNickname(nickname);

    return res.status(201).json(result);
  }

  async findManyUsers(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const { search } = req.body;
    const result = await userServices.findManyUsers(search, token!);

    return res.status(201).json(result);
  }

  async findUser(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const { nickname } = req.body;
    const result = await userServices.findUser(nickname, token!);

    return res.status(201).json(result);
  }
}
