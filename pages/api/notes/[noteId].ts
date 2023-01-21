import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { updateNoteDto, validateId } from "@/utils/validations";
import dbConnect from "@/config/dbConnect";
import Note from "@/models/note";

const getNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const note = await Note.findById(req.query.noteId);
    if (!note) {
      return res
        .status(404)
        .json({ error: `Note with ID "${req.query.noteId} not found."` });
    }

    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const editNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = updateNoteDto.safeParse(req.body);
    if (!response.success) {
      const errors = response.error.errors.map((error) => error.message);
      return res.status(400).json({ errors });
    }
    const note = await Note.findByIdAndUpdate(req.query.noteId, response.data, {
      new: true,
    });

    if (!note) {
      return res
        .status(404)
        .json({ error: `Note with ID "${req.query.noteId} not found."` });
    }
    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
const deleteNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await Note.findByIdAndDelete(req.query.noteId);
    res.status(200).json({ error: "Note deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

  const validId = validateId(req.query.noteId as string);

  if (!validId) {
    return res.status(400).json({ error: "Invalid note ID" });
  }

  await dbConnect();

  switch (method) {
    case "GET":
      await getNote(req, res);
      break;
    case "PATCH":
      await editNote(req, res);
      break;
    case "DELETE":
      await deleteNote(req, res);
      break;
    default:
      res
        .status(405)
        .json({ error: "Only GET, PATCH and DELETE methods are allowed" });
  }
};

export default handler;
