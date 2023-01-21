import { z } from "zod";
import mongoose from "mongoose";

export const createNoteDto = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title cannot be empty"),
  content: z
    .string({ required_error: "Content is required" })
    .min(1, "Content cannot be empty"),
});

export const updateNoteDto = createNoteDto.partial();

export const validateId = (id: string) => mongoose.Types.ObjectId.isValid(id);

export const createUserDto = z.object({
  firstName: z
    .string({ required_error: "First name is required" })
    .min(1, "First name cannot be empty"),
  lastName: z
    .string({ required_error: "Last name is required" })
    .min(1, "Last name cannot be empty"),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be six (6) characters or more"),
});
