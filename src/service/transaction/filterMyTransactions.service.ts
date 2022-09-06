import { prisma } from "../../prisma/client";
import { IQueryParams } from "../../interfaces/transaction";

const filterMyTransactionsService = async (
  { category, gtDate, ltDate, type }: IQueryParams,
  userId: string
) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      AND: [
        {
          type: { equals: type },
          date: {
            lte: ltDate && new Date(ltDate),
            gte: gtDate && new Date(gtDate),
          },
          category: { name: { equals: category && category.toLowerCase() } },
          userId,
        },
      ],
    },
  });

  return transactions;
};

export default filterMyTransactionsService;
