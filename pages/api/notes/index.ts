import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { createNoteDto } from "@/utils/validations";
import dbConnect from "@/config/dbConnect";
import Note from "@/models/note";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

const getAllNotes = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) => {
  try {
    const notes = await Note.find({ author: session.user._id });
    return res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const createNote = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session
) => {
  try {
    const response = createNoteDto.safeParse(req.body);
    if (!response.success) {
      const errors = response.error.errors.map((error) => error.message);
      return res.status(400).json({ errors });
    }

    const note = await Note.create({
      ...response.data,
      author: session.user._id,
    });

    res.status(201).json({ note });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

  await dbConnect();

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  switch (method) {
    case "GET":
      await getAllNotes(req, res, session);
      break;
    case "POST":
      await createNote(req, res, session);
      break;
    default:
      res.status(405).json({ error: "Only GET and POST methods are allowed." });
  }
};

export default handler;
