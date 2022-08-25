import { Router } from "express";

import deleteUserController from "src/controller/user/deleteUser.controller";
import listUserController from "src/controller/user/listUser.controller";
import loginUserController from "src/controller/user/loginUser.controller";
import recoveryAcessTokenController from "src/controller/user/recoveryAcessToken.controller";
import updatePasswordController from "src/controller/user/updatePassword.controller";
import updateUserController from "src/controller/user/updateProfile.controller";
import createUserController from "../controller/user/createUser.controller";

const userRouters = Router();

userRouters.post("", createUserController);
userRouters.post("/sigin", loginUserController);

userRouters.get("/recovery/:email", recoveryAcessTokenController); // Recovery password
userRouters.patch("/password/:acessToken", updatePasswordController); // Update password

userRouters.get("/me", listUserController);

userRouters.patch("/me", updateUserController); // Update profile
userRouters.patch("/password", updatePasswordController); // Update password

userRouters.delete("/me", deleteUserController);

export default userRouters;
