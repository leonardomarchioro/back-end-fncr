import { Request, Response } from "express";
import recoveryAcessTokenService from "../../service/user/recoveryAcessToken.service";

const recoveryAcessTokenController = async (req: Request, res: Response) => {
  const { email } = req.params;

  const acessToken = await recoveryAcessTokenService({ email });

  return res.status(200).json(acessToken);
};

export default recoveryAcessTokenController;
