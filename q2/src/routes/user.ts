import {
  addUser,
  deleteUser,
  findUsersByName,
  getUserByCords,
  udpateUserById,
} from "../controllers/user";
import express from "express";

const userRouter = express.Router();

userRouter.post("/", addUser);
userRouter.get("/", findUsersByName);
userRouter.get("/cords", getUserByCords);
userRouter.patch("/:id", udpateUserById);
userRouter.delete("/:id", deleteUser);

export default userRouter;
