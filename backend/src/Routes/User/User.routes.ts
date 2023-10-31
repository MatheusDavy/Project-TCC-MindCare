// Express
import { Router } from "express";
import * as AuthMiddleware from "../../Middleware/Token/Token.middleware";

// Controller

const UserRoutes = Router()

UserRoutes.get("/", AuthMiddleware.ensureAuthenticated, (req, res) => {
    res.json({
        message: 'loggado'
    })
})

export { UserRoutes }