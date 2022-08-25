import express, { Express } from "express";
import cors from "cors";
import "express-async-errors";
import userRouters from "./routes/user.routes";

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

export default app;
