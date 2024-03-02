import { Request, Response } from "express";
import { MoviesService } from "../Models/Movies.models";

// Services
const moviesServices = new MoviesService();

export class MoviesController {

  constructor() {
  }

  async getMoviesCategories(req: Request, res: Response) {
    const result = await moviesServices.getMovieCategories()
    
    return res.status(201).json(result);
  }
}

    