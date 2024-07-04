import { Request, Response } from "express";
import { FriendsService } from '../Models/Friends.models';
import { TokenProvider } from "../Providers/Token.providers";

const friendsServices = new FriendsService();

export class FriendsController {
  private TokenProvider: TokenProvider
  constructor() {
    this.TokenProvider = new TokenProvider()
  }
  // Privates

  async getUserFriends(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const result = await friendsServices.getUserFriends(token!);

    return res.status(201).json(result);
  }

  async addFriend(req: Request, res: Response) {
    const { nickname } = req.body;
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const result = await friendsServices.addFriend(token!, nickname);

    return res.status(201).json(result);
  }

  async cancelFriendRequest(req: Request, res: Response) {
    const { nickname } = req.body;
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const result = await friendsServices.cancelFriendRequest(token!, nickname);

    return res.status(201).json(result);
  }

  async cancelFriend(req: Request, res: Response) {
    const { nickname } = req.body;
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")
    const result = await friendsServices.cancelFriend(token!, nickname);

    return res.status(201).json(result);
  }

  async acceptFriend(req: Request, res: Response) {
    const { nickname } = req.body;
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ")

    const result = await friendsServices.acceptFriend(token!, nickname);

    return res.status(201).json(result);
  }

  async getFriendRequests(req: Request, res: Response){
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ");

    const result = await friendsServices.getFriendRequests(token!);

    return res.status(201).json(result);
  }
}
