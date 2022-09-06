import { Router } from "express";

import listMyTransactionsController from "../controller/transaction/listMyTransactions.controller";
import createTransactionController from "../controller/transaction/createTransaction.controller";

import ensureAuth from "../middlewares/ensureAuth.middleware";

const transactionRouters = Router();

transactionRouters.use(ensureAuth);

transactionRouters.post("", createTransactionController); // create transaction

transactionRouters.get("", listMyTransactionsController); // list all transaction | list by category | list by start date, end date
transactionRouters.get("/:id"); // list transaction by id

transactionRouters.patch("/:id"); // update transaction

transactionRouters.delete("/:id"); // delete transaction

export default transactionRouters;
