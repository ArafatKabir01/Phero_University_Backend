
import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";
import { academicSemesterCode, academicSemesterName, months } from "./academicSemester.constant";



const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
    name: {
      type: String,
      reqired: true,
      enum:academicSemesterName
    },
    code: {
      type: String,
      reqired: true,
      enum:academicSemesterCode
    },
    year: {
      type: String,
      unique: true,
    },
    startMonth: {
        type: String,
        enum:  months
    },
    endMonth: {
      type: String,
        enum: months
    }
    
  },
  
);

academicSemesterSchema.pre("save" ,async function(next){
  const isSemesterExist = await AcademicSemester.findOne({
    year : this.year,
    name : this.name 
  })
  if(isSemesterExist){
    throw new Error('This Semester Already Create in this year!')
  }
  next()
})

export const AcademicSemester = model<TAcademicSemester>("AcademicSemester", academicSemesterSchema);