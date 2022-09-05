import getOrCreateCategory from "../../utils/getOrCreate.utils";
import { ICreateTransaction } from "../../interfaces/transaction";
import { prisma } from "../../prisma/client";

const createTransactionService = async (
  { category, date, description, title, type, value }: ICreateTransaction,
  userId: string
) => {
  const categoryTransaction = await getOrCreateCategory(
    category.toLowerCase(),
    userId
  );

  return await prisma.transaction.create({
    data: {
      date: new Date(date),
      description,
      title,
      type,
      value,
      categoryId: categoryTransaction.id,
      userId,
    },
  });
};

export default createTransactionService;
