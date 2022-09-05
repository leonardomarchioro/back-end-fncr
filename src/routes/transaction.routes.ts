import { Router } from "express";
import ensureAuth from "../middlewares/ensureAuth.middleware";

const transactionRouters = Router();

transactionRouters.use(ensureAuth);

export default transactionRouters;
