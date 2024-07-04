import { Request, Response } from "express";
import { VideoServices } from "../Models/Learn.model";

const videoServices = new VideoServices();

export class LearnController {
  constructor() {}

  async markVideoAsWacthed(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ");
    const { idVideo } = req.query;

    const result = await videoServices.markVideoAsWatched(
      token,
      String(idVideo)
    );
    return res.status(201).json(result);
  }

  async markOffVideoAsWacthed(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ");
    const { idVideo } = req.query;

    if (!idVideo){
      return null
    }

    const result = await videoServices.markOffVideoAsWatched(
      token,
      String(idVideo)
    );
    return res.status(201).json(result);
  }

  async getFriedsSeenVideo(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ");
    const { idVideo } = req.query;

    const result = await videoServices.getFriendsWhoWatched(
      token,
      String(idVideo)
    );
    return res.status(201).json(result);
  }

  async verifyVideoWasWacthed(req: Request, res: Response) {
    const authToken = req.headers.authorization;
    const [, token] = authToken!.split(" ");
    const { idVideo } = req.query;

    const result = await videoServices.verifyVideoWasWacthed(
      token,
      String(idVideo)
    );
    return res.status(201).json(result);
  }
}
