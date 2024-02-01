import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../Errors/App.erros";
import { env } from "../env";

export function ensureAuthenticated (request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization

    if(!authToken){
        throw new AppError(
            'Token is Missing',
            401
        )
    }
    
    const [, token] = authToken.split(" ")

    try {
        verify(token, env.SECRET_TOKEN!);
        return next();
    } catch (err){
        throw new AppError(
            'Token Inválido',
            401
        )
    }
}