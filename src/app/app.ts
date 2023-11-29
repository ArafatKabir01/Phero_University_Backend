import cors from "cors";
import express, { Request, Response } from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";
import { userRoute } from "./module/user/user.router";
const app = express();

//perser
app.use(express.json());
app.use(cors());

app.use("/", userRoute.router);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello nabil");
});
app.use(globalErrorHandler);

export default app;
