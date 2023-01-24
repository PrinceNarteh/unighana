import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import dbConnect from "../../../config/dbConnect";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { loginDto } from "@/utils/validations";

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },

      async authorize(credentials, req) {
        console.log(credentials);
        const result = loginDto.safeParse(credentials);

        if (!result.success) {
          throw new Error("Please provide all info.");
        }
        const { email, password } = result.data;

        await dbConnect();
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
          console.log(user);
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (session.user) {
        session.user._id = token?._id as string;
        session.user.firstName = token?.firstName as string;
        session.user.lastName = token?.lastName as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
});
