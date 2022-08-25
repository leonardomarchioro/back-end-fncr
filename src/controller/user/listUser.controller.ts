import { Request, Response } from "express";
import listUserService from "../../service/user/listUser.service";

const listUserController = async (req: Request, res: Response) => {
  const { userId } = req;

  const user = await listUserService(userId);

  return res.status(200).json(user);
};

export default listUserController;
