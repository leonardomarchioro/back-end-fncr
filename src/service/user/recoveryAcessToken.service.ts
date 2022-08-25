import AppError from "../../errors/appError";
import { prisma } from "../../prisma/client";

const recoveryAcessTokenService = async ({ email }: { email: string }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError(404, "Not Found");
  }

  const accessToken = (Math.random() + 10).toString(36).substring(3);

  await prisma.user.update({
    where: { id: user.id },
    data: { accessToken },
  });

  return { status: "Success", accessToken };
};

export default recoveryAcessTokenService;
