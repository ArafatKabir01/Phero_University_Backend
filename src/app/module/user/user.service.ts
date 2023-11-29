import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudent = async function (password: string, studentData: TStudent) {
  const userData: Partial<TUser> = {};
  userData.password = password || config.default_pass;
  userData.id = "20230021";
  userData.role = "student";
  userData.email = studentData?.email;

  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userService = {
  createStudent,
};
