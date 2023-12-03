import NodeCache from "node-cache";
import { TStudent } from "./student.interface";
import { Student } from "./student.model";

const myCache = new NodeCache({ stdTTL: 10 });
const getStudent = async () => {
  if (myCache.has("student")) {
    return myCache.get("student");
  } else {
    const result = await Student.find();
    myCache.set("student", result);
    return result;
  }
};
const getSingleStudent = async (id: string) => {
  if (myCache.has("singleStudent")) {
    return myCache.get("singleStudent");
  } else {
    const result = await Student.findById(id);
    myCache.set("singleStudent", result);
    return result;
  }
};
const updateStudent = async (
  id: string,
  data: TStudent
): Promise<TStudent | null> => {
  const result = await Student.findByIdAndUpdate(id, data);
  return result;
};

export const studentServece = {
  getStudent,
  getSingleStudent,
  updateStudent,
};
