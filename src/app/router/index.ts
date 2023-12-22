import express from "express";
import studentRoute from "../module/student/student.router";
import userRoute from "../module/user/user.router";

import academicSemesterRouter from "../module/academicSemester/academicSemesetr.router";

const router = express.Router();

const moduleRoute = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/student",
    route: studentRoute,
  },
  {
    path: "/academic-semester",
    route: academicSemesterRouter
  },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
