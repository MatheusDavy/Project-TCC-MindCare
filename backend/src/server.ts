import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import precess from "process";
import { routes } from "./Routes";
import { AppError } from "./Errors/App.erros";
import { env } from "./env";

const app = express();
const port = env.APPLICATION_PORT;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", env.ACCESS_CONTROL_PORTS);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
}); 

app.use(express.json({limit: "50mb"}));
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal Server Error - ${err.message}`,
    });
  }
);

app.listen(port, () => console.log(`Server is running`));
