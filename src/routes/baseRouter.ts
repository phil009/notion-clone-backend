import express from "express";
import { auth } from "./userRoutes";

export const baseRouter = express.Router();

//POST Register a user
baseRouter.use("/user", auth);
