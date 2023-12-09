
import { Schema, model } from "mongoose";
import config from "../../config";
import { TAcademicSemester } from "./academicSemester.interface";


const AcademicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      reqired: true,
      unique: true,
    },
    code: {
      type: String,
    },
    year: {
      type: Date,
      unique: true,
    },
    startMonth: {
        type: String,
        enum:  ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November"]
    },
    endMonth: {
      type: String,
        enum: ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November"]
    }
    
  },
  
);
export const AcadamicSemester = model<TAcademicSemester>("AcadamicSemester", AcademicSemesterSchema);