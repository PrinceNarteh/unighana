import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import dbConnect from "@/config/dbConnect";
import Note from "@/models/note";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { method } = req;

  if (method !== "PATCH") {
    return res.status(405).json({ error: "Only PATCH method is allowed." });
  }
  await dbConnect();

  try {
    let note = await Note.findById(req.query.noteId);

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    if (note.author.toString() !== session.user._id) {
      res
        .status(403)
        .json({ error: "You are not permitted to perform this operation" });
      return;
    }

    note = await Note.findByIdAndUpdate(
      req.query.noteId,
      {
        $set: { favorite: !note.favorite },
      },
      { new: true }
    );
    res.status(200).json({ note });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
