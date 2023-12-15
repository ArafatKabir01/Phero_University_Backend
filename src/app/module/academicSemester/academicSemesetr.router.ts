import express, { Router } from 'express'
import validateRequest from '../../middleware/validateRequest'
import { AcademicSemestervalidation } from './academicSemesetr.validation'
import { academicSemesterController } from './acadamicSemester.controller'

const academicSemesterRouter = express.Router()

academicSemesterRouter.post('/create-academic-semester' ,validateRequest(AcademicSemestervalidation.academicSemesterValidationSchema) , academicSemesterController.createSemesterIntoDb)

academicSemesterRouter.get('/get-academic-semester' ,academicSemesterController.getSemesterIntoDb)
academicSemesterRouter.patch('/update-academic-semester/:semesterId' ,academicSemesterController.updateAcademicSemesterInfo)

export default academicSemesterRouter