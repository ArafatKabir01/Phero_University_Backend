import mongoose from "mongoose";
import app from "./app";
import config from "./config";


async function main() {
  const dbName = 'PhuUsers'; // Replace with your desired database name
  const connectionString = `${config.dataBase_url as string}`;

  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any); // Use type assertion here

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main().catch((err) => console.log(err));

