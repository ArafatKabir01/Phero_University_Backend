import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { studentController } from "../student/student.controller";
import { studentZodValidations } from "../student/student.validation";
import { userController } from "./user.controller";
const userRoute = express.Router();

const studentValidation = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
    } catch (error) {
      next(error);
    }
    return next();
  };
};

userRoute.post(
  "/create-student",
  studentValidation(studentZodValidations.studentZodValidationSchema),
  userController.createUser
);
userRoute.get("/students", studentController.getStudent);

export default userRoute;
