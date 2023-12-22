import express from "express";
import { studentController } from "./student.controller";
import validateRequest from "../../middleware/validateRequest";
import { studentZodValidations } from "./student.validation";

const studentRoute = express.Router();

studentRoute.get("/students",  studentController.getStudent);
studentRoute.get("/students/:id",  studentController.getSingleStudent);
studentRoute.patch("/students/:id",validateRequest(studentZodValidations.updateStudentZodValidationSchema), studentController.updateStudent);

export default studentRoute;
