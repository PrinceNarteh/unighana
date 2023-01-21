import { Schema, model, models } from "mongoose";
import { IUser } from "@/types/note";

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [5, "Password must be six (6) characters or more"],
    },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model<IUser>("User", userSchema);
export default User;
