import { Router } from "express";

import deleteUserController from "../controller/user/deleteUser.controller";
import listUserController from "../controller/user/listUser.controller";
import loginUserController from "../controller/user/loginUser.controller";
import recoveryAcessTokenController from "../controller/user/recoveryAcessToken.controller";
import updatePasswordController from "../controller/user/updatePassword.controller";
import updateUserController from "../controller/user/updateProfile.controller";
import createUserController from "../controller/user/createUser.controller";

import ensureAuth from "../middlewares/ensureAuth.middleware";
import verifyAcessToken from "../middlewares/user/verifyAcessToken.middleware";
import verifyPassword from "../middlewares/user/verifyPassword.middleware";
import verifyDuplicatedEmail from "../middlewares/user/verifyDuplicateEmail.middleware";

import {
  createUserSchema,
  recoveryPasswordSchema,
  updatePasswordSchema,
  updateUserSchema,
} from "../validations/user/index";

import { expressYupMiddleware } from "express-yup-middleware";

const userRouters = Router();

userRouters.post(
  "",
  expressYupMiddleware({ schemaValidator: createUserSchema }),
  verifyDuplicatedEmail,
  createUserController
);

userRouters.post("/sigin", loginUserController);

userRouters.get("/recovery/:email", recoveryAcessTokenController); // Recovery password

userRouters.patch(
  "/password/:acessToken",
  expressYupMiddleware({ schemaValidator: recoveryPasswordSchema }),
  verifyAcessToken,
  updatePasswordController
); // Update password

userRouters.use(ensureAuth);

userRouters.get("/me", listUserController);

userRouters.patch(
  "/me",
  expressYupMiddleware({ schemaValidator: updateUserSchema }),
  updateUserController
); // Update profile

userRouters.patch(
  "/password",
  expressYupMiddleware({ schemaValidator: updatePasswordSchema }),
  verifyPassword,
  updatePasswordController
); // Update password

userRouters.delete("/me", deleteUserController);

export default userRouters;
