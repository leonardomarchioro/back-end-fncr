import { Request, Response } from "express";
import recoveryPasswordService from "../../service/user/recoveryPassword.service";
import updatePasswordService from "../../service/user/updatePassword.service";

const updatePasswordController = async (req: Request, res: Response) => {
  const { newPassword } = req.body;
  const { userId } = req;

  if (userId) {
    await updatePasswordService({ newPassword, userId });
  } else {
    const { email } = req.body;
    await recoveryPasswordService({ newPassword, email });
  }

  return res.status(200).json({ status: "Senha alterada com sucesso" });
};

export default updatePasswordController;
