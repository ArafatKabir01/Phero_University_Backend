import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import config from "../../config";
import { TUser } from "./user.interface";

const UserSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      reqired: true,
      unique: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
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

//Hashing passwoed before data posting into db
UserSchema.pre("save", async function (next) {
  const user: TUser = this;
  user.password = await bcrypt.hash(user.password, Number(config.salt_rounds));
  next();
});
UserSchema.post("save", async function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("Users", UserSchema);
