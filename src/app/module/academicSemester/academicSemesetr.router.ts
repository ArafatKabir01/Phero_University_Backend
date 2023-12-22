import express, { Router } from 'express'
import validateRequest from '../../middleware/validateRequest'
import { AcademicSemesterValidation } from './academicSemesetr.validation'
import { academicSemesterController } from './academicSemester.controller'

const academicSemesterRouter = express.Router()

academicSemesterRouter.post('/create-academic-semester' ,validateRequest(AcademicSemesterValidation.academicSemesterValidationSchema) , academicSemesterController.createSemesterIntoDb)

academicSemesterRouter.get('/get-academic-semester' ,academicSemesterController.getSemesterIntoDb)
academicSemesterRouter.get('/get-academic-semester/:id' ,academicSemesterController.getSingleSemesterIntoDb)
academicSemesterRouter.patch('/update-academic-semester/:semesterId' ,validateRequest(AcademicSemesterValidation.updateAcademicSemesterValidationSchema) ,academicSemesterController.updateAcademicSemesterInfo)

export default academicSemesterRouter