import { TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createSemester = async (payload: TAcademicSemester) => {
  type TAcademicSemesterCodeMapper = {
    [kye: string]: string;
  };

  const academicSemesterCodeNameMapper: TAcademicSemesterCodeMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "03",
  };
  if (academicSemesterCodeNameMapper[payload.name] !== payload.code) {
    
    throw new Error("Code Not match");
    
  } else {

    const newAcademicSemester = await AcademicSemester.create(payload);
    return newAcademicSemester;
  }
};

const getSemester = async () => {
  const res = await AcademicSemester.find();
  return res;
};

const getSingleSemester = async (id: string) => {
  const res = await AcademicSemester.findById(id);
  return res;
};

const updateSemesterInfo = async (
  id: string,
  payload: TAcademicSemester
): Promise<TAcademicSemester | null> => {
  const res = await AcademicSemester.findByIdAndUpdate(id, payload);
  return res;
};

export const academicSemesterService = {
  createSemester,
  getSemester,
  updateSemesterInfo,
  getSingleSemester,
};
