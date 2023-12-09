import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utility/catchAsync";
import { userService } from "./user.service";

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, student: studentData } = req.body;
    console.log(studentData)
    const result = await userService.createStudent(password, studentData);
    res.status(200).json({
      success: true,
      message: "Create Srudent successfully",
      data: result,
    });
  }
);

export const userController = {
  createUser,
};
