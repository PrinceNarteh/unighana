import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/config/dbConnect";
import Note from "@/models/note";
import { createNoteDto } from "@/utils/validations";

const getAllNotes = async (req: NextApiRequest, res: NextApiResponse) => {
  const notes = await Note.find({});
  return res.status(200).json({ notes });
};

const createNote = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = createNoteDto.safeParse(req.body);
    if (!response.success) {
      const errors = response.error.errors.map((error) => error.message);
      return res.status(400).json({ errors });
    }

    const note = await Note.create(response.data);

    res.status(201).json({ note });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      await getAllNotes(req, res);
      break;
    case "POST":
      await createNote(req, res);
      break;
    default:
      res.status(405).json({ error: "Only GET and POST methods are allowed." });
  }
};

export default handler;
