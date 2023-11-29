import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      reqired: true,
    },
    password: {
      type: String,
    },
    needPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
    },
    status: {
      type: String,
      enum: ["in-progress", "bloock"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser>("Users", UserSchema);
