import dotenv from "dotenv"
import mongooConnect from "./src/db/dbConfig";
dotenv.config();
mongooConnect();