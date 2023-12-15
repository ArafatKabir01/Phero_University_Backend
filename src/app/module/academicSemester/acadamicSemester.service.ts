import { TAcademicSemester } from "./academicSemester.interface";
import { AcadamicSemester } from "./academicSemester.model";

const createSemester = async (payload:TAcademicSemester) =>{
    type TAcademicSemesterCodeMapper = {
        [kye : string] :  string
    }

    const academicSemesterCodeNameMapper : TAcademicSemesterCodeMapper = {
        Autumn : "01",
        Summer : "02",
        Fall : "03"
    }
    if(academicSemesterCodeNameMapper[payload.name] !== payload.code){
        throw new Error("Code Not match")
    }
    
    const newAcademicSemester = await AcadamicSemester.create(payload);
    return newAcademicSemester;


   
    
}

const getSemester = async( ) =>{
    const res =await AcadamicSemester.find()
    return res
}
const updateSemesterInfo = async(id:string, payload:TAcademicSemester ): Promise<TAcademicSemester | null> =>{
    const res =await AcadamicSemester.findByIdAndUpdate(id , payload)
    return res
}

export const academicSemesterService = {
    createSemester,
    getSemester,
    updateSemesterInfo
}