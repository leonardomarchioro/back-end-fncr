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

const userRouters = Router();

userRouters.post("", verifyDuplicatedEmail, createUserController);
userRouters.post("/sigin", loginUserController);

userRouters.get("/recovery/:email", recoveryAcessTokenController); // Recovery password
userRouters.patch(
  "/password/:acessToken",
  verifyAcessToken,
  updatePasswordController
); // Update password

userRouters.use(ensureAuth);

userRouters.get("/me", listUserController);

userRouters.patch("/me", updateUserController); // Update profile
userRouters.patch("/password", verifyPassword, updatePasswordController); // Update password

userRouters.delete("/me", deleteUserController);

export default userRouters;
