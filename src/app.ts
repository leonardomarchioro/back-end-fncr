import express, { Express } from "express";
import cors from "cors";
import "express-async-errors";

const app: Express = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("Hello"));

export default app;
