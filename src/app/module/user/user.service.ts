import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generatedStudentId } from "./user.util";

const createStudent = async function (password: string, payload: TStudent) {
  const userData: Partial<TUser> = {};

  userData.password = password || config.default_pass;
  userData.role = "student";
  userData.email = payload?.email;

  // find academic semester info 
console.log(payload)
  const academicSemester = await AcademicSemester.findById(payload?.admissionSemester)
console.log(academicSemester)
  userData.id = await generatedStudentId(academicSemester as TAcademicSemester)

  const newUser = await User.create(userData);
  if (Object.keys(newUser).length && payload) {
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const userService = {
  createStudent,
};
