import { prisma } from "../prisma/client";

const getOrCreateCategory = async (name: string, userId: string) => {
  const categoryTransaction = await prisma.category.findFirst({
    where: {
      name,
      userId,
    },
  });

  if (!categoryTransaction) {
    return await prisma.category.create({
      data: {
        name,
        userId,
      },
    });
  }

  return categoryTransaction;
};

export default getOrCreateCategory;
