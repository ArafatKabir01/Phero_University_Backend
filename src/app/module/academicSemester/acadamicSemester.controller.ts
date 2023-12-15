import { NextFunction, Request, Response ,} from "express"
import { academicSemesterService } from "./acadamicSemester.service"
import catchAsync from "../../utility/catchAsync"

const createSemesterIntoDb = catchAsync(async(req:Request , res:Response ,next:NextFunction)=>{
    const semesterInfo = req.body
    const result = await academicSemesterService.createSemester(semesterInfo)

    res.status(200).json({
        success: true,
        messege: "Academic semester is create successfully",
        data: result,
      });
    return result

})
const getSemesterIntoDb = catchAsync(async(req:Request , res:Response ,next:NextFunction)=>{
   
    const result = await academicSemesterService.getSemester()

    res.status(200).json({
        success: true,
        messege: "Academic semester is create successfully",
        data: result,
      });
    return result

})

const updateAcademicSemesterInfo = catchAsync( async (req:Request , res:Response ,next:NextFunction)=>{
    const id = req.params.id;
    const data = req.body
    const result = await academicSemesterService.updateSemesterInfo(id , data)
    res.status(200).json({
        success: true,
        messege: "Academic Semester update successfully",
        data: result,
      });
      return result
})


export const academicSemesterController = {
    createSemesterIntoDb,
    getSemesterIntoDb,
    updateAcademicSemesterInfo
}