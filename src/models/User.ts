import mongoose, { Document, Schema } from "mongoose";

export interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
}

const userSchema = new Schema<IUser >({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
