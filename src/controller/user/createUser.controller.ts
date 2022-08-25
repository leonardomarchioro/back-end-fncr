import { Request, Response } from "express";
import createUserService from "../../service/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const newUser = await createUserService({ email, name, password });

  return res.status(201).json(newUser);
};

export default createUserController;
