export type TUser = {
  id: string;
  password?: string | undefined;
  email: string;
  needPasswordChange: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "bloock";
  isDeleted: boolean;
};
