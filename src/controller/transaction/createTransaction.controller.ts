import { Request, Response } from "express";
import createTransactionService from "../../service/transaction/createTransaction.service";

const createTransactionController = async (req: Request, res: Response) => {
  const { userId } = req;
  const { category, date, description, title, value, type } = req.body;

  const newTransaction = await createTransactionService(
    { category, date, description, title, type, value },
    userId
  );

  return res
    .status(201)
    .json({
      message: "Nova transação cadastrada",
      transaction: { ...newTransaction },
    });
};

export default createTransactionController;
