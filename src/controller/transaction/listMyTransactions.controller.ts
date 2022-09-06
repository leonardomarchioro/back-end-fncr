import { Request, Response } from "express";

import filterMyTransactionsService from "../../service/transaction/filterMyTransactions.service";
import listMyTransactionsService from "../../service/transaction/listMyTransactions.service";

const listMyTransactionsController = async (req: Request, res: Response) => {
  const { userId } = req;

  if (JSON.stringify(req.query) !== JSON.stringify({})) {
    console.log(req.query);
    const filterTransactions = await filterMyTransactionsService(
      req.query,
      userId
    );

    return res.status(200).json(filterTransactions);
  }

  const transactions = await listMyTransactionsService(userId);

  return res.status(200).json(transactions);
};

export default listMyTransactionsController;
