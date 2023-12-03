import express from "express";
import { studentController } from "./student.controller";

const studentRoute = express.Router();

studentRoute.get("/students", studentController.getStudent);
studentRoute.get("/students/:id", studentController.getSingleStudent);
studentRoute.patch("/students/:id", studentController.updateStudent);

export default studentRoute;
