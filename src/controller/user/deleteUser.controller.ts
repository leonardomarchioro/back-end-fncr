import { Request, Response } from "express";
import deleteUserService from "../../service/user/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { userId } = req;

  await deleteUserService(userId);

  return res.sendStatus(204);
};

export default deleteUserController;
