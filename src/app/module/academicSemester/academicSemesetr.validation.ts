import { z } from "zod";
import { academicSemesterCode, academicSemesterName, months } from "./academicSemester.constant";

const academicSemesterValidationSchema =  z.object({
   
    body : z.object({
      name:z.enum([...academicSemesterName] as [string, ...string[]]),
      code:z.enum([...academicSemesterCode]  as [string, ...string[]]),
      year : z.string(),
      startMonth: z.enum([...months] as [string, ...string[]]),
      endMonth: z.enum([...months] as [string, ...string[]]) 
    })
   
  });


export const  AcademicSemestervalidation = {
  academicSemesterValidationSchema
}