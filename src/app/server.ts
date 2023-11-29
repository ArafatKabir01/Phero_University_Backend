import mongoose from "mongoose";
import config from "../config";
import app from "./app";

async function main() {
  await mongoose.connect(config.dataBase_url as string);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}
main().catch((err) => console.log(err));
