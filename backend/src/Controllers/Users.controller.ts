import { Request, Response } from "express";
import { UserService } from "../Models/Users.models";

const userServices = new UserService();

export class UsersController {
  constructor() {}

  async getUser(req: Request, res: Response) {
    const authToken = req.headers.authorization
    const [, token] = authToken!.split(" ") 
     
    const result = await userServices.getUser(token);

    return res.status(201).json(result);
  } 

  async updateUser(req: Request, res: Response) {
    const authToken = req.headers.authorization
    const datas = req.body
    const [, token] = authToken!.split(" ") 

    const result = await userServices.updateUser(token, datas);

    return res.status(201).json(result);
  }
}

    