import { Request, Response } from "express";
import { AuthService } from "../Models/Auth/Auth.models";

// Services
const AuthServices = new AuthService();

export class AuthController {
  async userCreate(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const result = await AuthServices.createUser({
      name,
      email,
      password
    });

    return res.status(201).json(result);
  }

  async userLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    const result = await AuthServices.loginUser({ email, password });

    return res.status(201).json(result);
  }

  async OAuthLogin(req: Request, res: Response){
    const { name, email } = req.body;
    const result = await AuthServices.OAuthLogin({
      name,
      email
    });

    return res.status(201).json(result);
  }

  async forgetPassword(req: Request, res: Response){
    const { email } = req.body;

    const result = await AuthServices.forgetPassword(email);

    return res.status(201).json(result);
  }

  async resetPassword(req:Request, res:Response){
    const { password, token } = req.body;

    const result = await AuthServices.resetPassword({ password, token });

    return res.status(201).json(result);
  }
}

