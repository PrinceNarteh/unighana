"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../assets/images/logo.png";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="shadow-md z-20 px-5">
      <div className="max-w-6xl mx-auto py-3 flex items-center justify-between">
        <Link href={"/"}>
          <Image src={logo} height={40} alt="" />
        </Link>
        <div className="flex items-center gap-5">
          {session && (
            <p className="text-gray-700">{`${session.user.firstName} ${session.user.lastName}`}</p>
          )}
          <button className="text-blue-500 text-sm" onClick={() => signOut()}>
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
