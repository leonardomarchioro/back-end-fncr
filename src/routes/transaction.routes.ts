import { Router } from "express";

import createTransactionController from "../controller/transaction/createTransaction.controller";

import ensureAuth from "../middlewares/ensureAuth.middleware";

const transactionRouters = Router();

transactionRouters.use(ensureAuth);

transactionRouters.post("", createTransactionController); // create transaction

transactionRouters.get(""); // list all transaction | list by category | list by start date, end date
transactionRouters.get(""); // list transaction by id

transactionRouters.patch(""); // update transaction

transactionRouters.delete(""); // delete transaction

export default transactionRouters;
