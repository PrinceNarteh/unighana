import { Schema, model, models } from "mongoose";

type INote = {
  title: string;
  content: string;
  favourite?: boolean;
  color: string;
};

const noteSchema = new Schema<INote>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    favourite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Note = models.Note || model<INote>("Note", noteSchema);

export default Note;
