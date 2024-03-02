// Express
import { Router } from "express";
import * as AuthMiddleware from "../Middleware/Token.middleware";
import { MoviesController } from "../Controllers/Movies.controller";

// Controller
const Movies = new MoviesController();

const MoviesRoutes = Router();

MoviesRoutes.get("/", AuthMiddleware.ensureAuthenticated, )
MoviesRoutes.get("/categories", Movies.getMoviesCategories)

export { MoviesRoutes }