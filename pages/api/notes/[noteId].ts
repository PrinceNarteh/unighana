import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const getNote = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ note: "Get single note" });
};
const editNote = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ note: "update note" });
};
const deleteNote = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ error: "delete note" });
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { method } = req;

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
