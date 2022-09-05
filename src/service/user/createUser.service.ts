import { hash } from "bcryptjs";
import { prisma } from "../../prisma/client";
import { ICreateUser } from "../../interfaces/user";

const createUserService = async ({ email, name, password }: ICreateUser) => {
  const hashPassword = await hash(password, 8);

  return await prisma.user.create({
    data: { email, name, password: hashPassword },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};

export default createUserService;
