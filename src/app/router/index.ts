import express from "express";
import studentRoute from "../module/student/student.router";
import userRoute from "../module/user/user.router";

const router = express.Router();

const moduleRoute = [
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/users",
    route: studentRoute,
  },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
