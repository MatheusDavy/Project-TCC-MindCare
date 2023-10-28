import { Request, Response } from 'express'
import { AuthService } from '../../Models/Auth/Auth.models';

export class AuthController {
    async userCreate(req: Request, res: Response){
        const {name, email, password} = req.body

        const createUser = new AuthService();

        const result = createUser.createUser({name, email, password})

        return res.status(201).json(result);
    }
}

