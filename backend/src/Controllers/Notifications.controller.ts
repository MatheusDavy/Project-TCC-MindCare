import { Request, Response } from "express";
import { NotificationsServices } from "../Models/Notifications.models";

const notificationsServices = new NotificationsServices();

export class NotificationsController {
  constructor() {}

  async getNotifications(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ");
    const result = await notificationsServices.getNotifications(token);

    return res.status(201).json(result);
  }

}
