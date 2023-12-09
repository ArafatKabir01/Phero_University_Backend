import { z } from "zod";

const userValidationSchema =  z.object({
   
    password: z.string().max(20 , {message: 'password cannot be more then 20'}).optional(),
   
  });




export const validation = {
    userValidationSchema
}