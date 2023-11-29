import { Request, Response } from "express";
import { userService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    console.log(studentData);
    const result = await userService.createStudent(password, studentData);
    res.status(200).json({
      success: true,
      message: "Create Srudent successfully",
      data: result,
    });
  } catch (error) {
    console.log(`err from controller: ${error}`);
  }
};

export const userController = {
  createUser,
};
