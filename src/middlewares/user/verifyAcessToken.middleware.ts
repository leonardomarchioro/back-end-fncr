import { NextFunction, Request, Response } from "express";

import AppError from "../../errors/appError";
import { prisma } from "../../prisma/client";

const verifyAcessToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { acessToken } = req.params;
  const { email } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new AppError(404, "Email não encontrado");
  }

  if (user.accessToken !== acessToken) {
    throw new AppError(401, "Não autorizado");
  }

  return next();
};

export default verifyAcessToken;
