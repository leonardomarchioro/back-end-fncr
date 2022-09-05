import "express-async-errors";
import express, { Express } from "express";
import cors from "cors";
import userRouters from "./routes/user.routes";
import errorHandler from "./middlewares/handlerErrors.middleware";

const app: Express = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/user", userRouters);

app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Hello"));

app.use(errorHandler);

export default app;
