import dotenv from "dotenv"
import express from "express";
import mongooConnect from "./src/db/dbConfig";
import clientRouter from "./src/routes/clientRoutes";
import errorHandler from "./src/middleware/errorHandler";

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/client", clientRouter);
const port = 5000;
app.listen(port, () => {
    console.log("Server running on port: ", port);
  });

  app.use(errorHandler);
mongooConnect();