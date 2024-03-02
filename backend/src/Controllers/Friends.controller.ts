import { Request, Response } from "express";
import { FriendsService } from '../Models/Friends.models';

// Services
const friendsServices = new FriendsService();

export class FriendsController {

  constructor() {
  }

  async getUserFriends(req: Request, res: Response) {
    const authToken = req.headers.authorization
    const [, token] = authToken!.split(" ") 

    const result = await friendsServices.getUserFriends(token);

    return res.status(201).json(result);
  }

  async getUsers(req: Request, res: Response) {
    const search = req.query.user

    if (typeof search !== 'string') return res.status(201).json([]);

    const result = await friendsServices.getUsers(search);

    return res.status(201).json(result);
  }
}

    