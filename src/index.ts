import "express-async-errors";
import app from "./start/app";
import { AppDataSource } from "./start/db";

const main = async () => {
  AppDataSource.initialize();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`<<< Listening on port ${PORT}...`));
};

main();
