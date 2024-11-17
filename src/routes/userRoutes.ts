import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers";

export const auth = express.Router();

//POST Register a user
auth.post("/register", registerUser);
auth.post("/login", loginUser);
