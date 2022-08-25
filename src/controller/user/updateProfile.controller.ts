import { Request, Response } from "express";
import updateUserService from "../../service/user/updateProfile.service";

const updateUserController = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const { userId } = req;

  const updateUser = await updateUserService(userId, { name, email });

  return res.status(200).json(updateUser);
};

export default updateUserController;
