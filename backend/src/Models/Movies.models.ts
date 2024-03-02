import { prisma } from "../Prisma/client";
import { ErrorProvider } from "../Providers/ErrorMessage.provider";
import { SuccessProvider } from "../Providers/SuccessMessage.provider";
// Types

// Services

// Error
import { TokenProvider } from "../Providers/Token.providers";

export class MoviesService {
  private handlerError: ErrorProvider;
  private handlerSuccess: SuccessProvider;

  constructor() {
    this.handlerError = new ErrorProvider();
    this.handlerSuccess = new SuccessProvider();
  }

  async getMovieCategories() {
    
  }
}
