import { IUpdateUser } from "../../interfaces/user";
import { prisma } from "../../prisma/client";

const updateUserService = async (
  userId: string,
  { name, email }: IUpdateUser
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  const data = {
    name: name ? name : user.name,
    email: email ? email : user.email,
  };

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data,
    select: {
      password: false,
    },
  });

  return updatedUser;
};

export default updateUserService;
