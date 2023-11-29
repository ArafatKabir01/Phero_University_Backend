import express from "express";
import { userController } from "./user.controller";
const router = express.Router();

router.post("/users/create-student", userController.createUser);

export const userRoute = {
  router,
};
