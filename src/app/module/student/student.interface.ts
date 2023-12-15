import { Types } from "mongoose";

export type Guardian = {
  fatherName: string;
  fatherPhoneNo: string;
  fatherOccupation: string;
  motherName: string;
  motherPhoneNo: string;
  motherOccupation: string;
};
export type Username = {
  firstName: string;
  middlename?: string;
  lastname: string;
};
export type LocalGuardian = {
  name: Username;
  phoneNomber: string;
};
export interface TStudent {
  id: string;
  user: Types.ObjectId;
  name: Username;
  address: string;
  phoneNumber: string;
  email: string;
  gender: "male" | "female";
  dateOfBirth: Date;
  bloodGroup: "A+" | "B+" | "A-" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg: string;
}
