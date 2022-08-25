import { Request, Response } from "express";
import updatePasswordService from "../../service/user/updatePassword.service";

const updatePasswordController = async (req: Request, res: Response) => {
  const { newPassword } = req.body;
  const { userId } = req;

  await updatePasswordService({ newPassword, userId });

  return res.status(200).json({ status: "Senha alterada com sucesso" });
};

export default updatePasswordController;
