import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/config/dbConnect";
import Note from "@/models/note";

const getAllNotes = async (req: NextApiRequest, res: NextApiResponse) => {
  const notes = await Note.find({});
  return res.status(200).json({ notes: [] });
};
const createNote = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(201).json({ note: "Note created successfully" });
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
