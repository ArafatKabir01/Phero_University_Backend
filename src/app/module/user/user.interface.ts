export type TUser = {
  id: string;
  password?: any;
  email: string;
  needPasswordChange: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "bloock";
  isDeleted: boolean;
};
