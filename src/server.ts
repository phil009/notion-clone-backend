import express, { Request, Response, Router } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { baseRouter } from "./routes/baseRouter";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", baseRouter);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error", error));

app.get("/", (req: Request, res: Response) => {
  res.send("server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
