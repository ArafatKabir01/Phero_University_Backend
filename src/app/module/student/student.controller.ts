import catchAsync from "../../utility/catchAsync";
import { studentServece } from "./student.service";

const getStudent = catchAsync(async (req, res) => {
  const result = await studentServece.getStudent();
  res.status(200).json({
    success: true,
    messege: "Students fetch successfully",
    data: result,
  });
  return result;
});

const getSingleStudent = catchAsync(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const result = await studentServece.getSingleStudent(id);
  res.status(200).json({
    success: true,
    messege: "Student fetch successfully",
    data: result,
  });
  return result;
});

const updateStudent = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  console.log(id);
  const result = await studentServece.updateStudent(id, updatedData);
  res.status(200).json({
    success: true,
    messege: "Student update successfully",
    data: result,
  });
  return result;
});

export const studentController = {
  getStudent,
  getSingleStudent,
  updateStudent,
};
