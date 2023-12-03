import cors from "cors";
import express, { Request, Response } from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";
import router from "./router";
const app = express();

//perser
app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello nabil");
});
app.use(globalErrorHandler);

export default app;
