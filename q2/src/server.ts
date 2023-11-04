import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/dbConnection";
import mongoose from "mongoose";
import userRouter from "./routes/user";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT as string;

app.use(cors());
app.use(express.json()); // used to get data from JSON type
app.use(express.urlencoded({ extended: true })); // used to get data from URL or form data

connectDB();

app.get("/", (_request: Request, response: Response) => {
  response.status(200).json({ message: "Server is up!" });
});

app.use("/users", userRouter);

app.use("*", (_req: Request, res: Response) => {
  res.status(400).json({ message: "Invalid request URL!" });
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`Server spinning at http://localhost:${PORT}`);
  });
});
