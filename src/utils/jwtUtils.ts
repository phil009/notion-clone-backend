import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "my-sceret-key";

export const generateToken = (userID: string) => {
  return jwt.sign({ userID }, JWT_SECRET, { expiresIn: "1h" });
};
