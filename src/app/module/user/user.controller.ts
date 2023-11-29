import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userService.createStudent(password, studentData);
    res.status(200).json({
      success: true,
      message: "Create Srudent successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUser,
};
