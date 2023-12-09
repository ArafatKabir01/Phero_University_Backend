import { Schema, model } from "mongoose";

import {
  Guardian,
  LocalGuardian,
  TStudent,
  Username,
} from "./student.interface";
//Schema
const userNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  middlename: { type: String, required: false },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
  },
});

const guardian = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father name is required"] },
  fatherOccupation: String,
  fatherPhoneNo: String,
  motherName: { type: String, required: [true, "Mother name is required"] },
  motherOccupation: String,
  motherPhoneNo: String,
});

const localGuardian = new Schema<LocalGuardian>({
  name: {
    type: userNameSchema,
    required: [true, "Local guardian name is required"],
  },
  phoneNomber: String,
});

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
    unique: true,
    required: false,
    message: "ID already exists",
  },
  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: false,
    message: "ID already exists",
  },
  name: {
    type: userNameSchema,
    required: [true, "Student name is required"],
  },
  address: String,
  phoneNumber: String,
  email: { type: String, required: [true, "Email is required"], unique: true },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not valid",
    },
    required: [true, "Gender is required"],
    default: "male",
  },
  dateOfBirth: Number,
  bloodGroup: {
    type: String,
    enum: ["A+", "B+", "A-", "B-", "O+", "O-", "AB+", "AB-"],
  },
  guardian: guardian,
  localGuardian: localGuardian,
  profileImg: String,
});

export const Student = model<TStudent>("Students", studentSchema);
