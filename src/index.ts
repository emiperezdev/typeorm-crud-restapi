import app from "./app";
import { AppDataSource } from "./db";

const main = async () => {
  AppDataSource.initialize();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`<<< Listening on port ${PORT}...`));
};

main();
