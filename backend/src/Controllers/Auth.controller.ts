import { Request, Response } from "express";
import { AuthService } from "../Models/Auth/Auth.models";

const AuthServices = new AuthService();

export class AuthController {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const result = await AuthServices.register({ name, email, password });
    return res.status(201).json(result);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await AuthServices.login({ email, password });
    
    return res.status(201).json(result);
  }

  async forgetPassword(req: Request, res: Response) {
    const { email } = req.body;
    const result = await AuthServices.forgetPassword(email);
    return res.status(201).json(result);
  }

  async resetPassword(req: Request, res: Response) {
    const { password, token } = req.body;
    const result = await AuthServices.resetPassword({ password, token });
    return res.status(201).json(result);
  }
}
