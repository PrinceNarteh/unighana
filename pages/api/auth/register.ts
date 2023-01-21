import bcrypt from "bcryptjs";
import dbConnect from "@/config/dbConnect";
import { createUserDto } from "@/utils/validations";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import User from "@/models/user";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST method is allowed" });
  }

  try {
    const result = createUserDto.safeParse(req.body);

    if (!result.success) {
      const errorsArr = result.error.errors.map((err) => err.message);
      return res.status(400).json({ errors: errorsArr });
    } else {
      const { email, firstName, lastName, password } = result.data;
      const hashedPassword = await bcrypt.hash(password, 12);
      await dbConnect();
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      res.status(201).json({ user });
    }
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).json({ errors: ["Email already in used"] });
    }

    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
