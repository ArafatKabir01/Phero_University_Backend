import express from "express";
import { studentController } from "../student/student.controller";
import { studentZodValidations } from "../student/student.validation";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
const userRoute = express.Router();


userRoute.post(
  "/create-student",
  validateRequest(studentZodValidations.studentZodValidationSchema),
  userController.createUser
);
userRoute.get("/students", studentController.getStudent);

export default userRoute;
