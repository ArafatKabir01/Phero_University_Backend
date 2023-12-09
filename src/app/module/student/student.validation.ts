import { z } from "zod";

const userNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(5, { message: "Must be 5 or fewer characters long" })
    .trim(),
  middlename: z.string().optional(),
  lastname: z.string().min(1),
});

const guardianSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().optional(),
  fatherPhoneNo: z.string().optional(),
  motherName: z.string().min(1),
  motherOccupation: z.string().optional(),
  motherPhoneNo: z.string().optional(),
});

const localGuardianSchema = z.object({
  name: userNameSchema.required().optional(),
  phoneNomber: z.string(),
});

const studentZodValidationSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: userNameSchema.required(),
      address: z.string().optional(),
      phoneNumber: z.string().optional(),
      email: z.string().email(),
      gender: z.enum(["male", "female"]).default("male"),
      dateOfBirth: z.string().optional(),
      bloodGroup: z
        .enum(["A+", "B+", "A-", "B-", "O+", "O-", "AB+", "AB-"])
        .optional(),
      guardian: guardianSchema,
      localGuardian: localGuardianSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentZodValidations = {
  studentZodValidationSchema,
};
