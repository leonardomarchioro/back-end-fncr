import { prisma } from "../../prisma/client";

const listMyTransactionsService = async (userId: string) => {
  return await prisma.transaction.findMany({ where: { userId } });
};

export default listMyTransactionsService;
