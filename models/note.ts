import {
  Schema,
  model,
  models,
  Types,
  Document,
  SchemaDefinitionProperty,
} from "mongoose";

interface INote extends Document {
  title: string;
  content: string;
  favourite?: boolean;
  author: SchemaDefinitionProperty<Types.ObjectId>;
}

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
    author: {
      type: Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Note = models.Note || model<INote>("Note", noteSchema);

export default Note;
