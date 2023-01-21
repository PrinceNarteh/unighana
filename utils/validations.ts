import { z } from "zod";
import mongoose from "mongoose";

export const createNoteDto = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title cannot be empty"),
  content: z
    .string({ required_error: "Content is required" })
    .min(1, "Content cannot be empty"),
  color: z.string({
    required_error: "Color is required",
  }),
});

export const updateNoteDto = createNoteDto.partial();

export const validateId = (id: string) => mongoose.Types.ObjectId.isValid(id);
