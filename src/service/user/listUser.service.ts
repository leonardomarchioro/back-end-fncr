import { prisma } from "../../prisma/client";

const listUserService = async (userId: string) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};

export default listUserService;
