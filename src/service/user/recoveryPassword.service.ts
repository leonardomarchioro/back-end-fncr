import { hash } from "bcryptjs";
import { prisma } from "../../prisma/client";

interface IData {
  newPassword: string;
  email: string;
}

const recoveryPasswordService = async ({ newPassword, email }: IData) => {
  const hashPassword = await hash(newPassword, 10);

  await prisma.user.update({
    where: { email },
    data: { password: hashPassword, accessToken: null },
  });

  return true;
};

export default recoveryPasswordService;
