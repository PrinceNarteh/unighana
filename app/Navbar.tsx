import Image from "next/image";
import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="shadow-md mb-10">
      <div className="max-w-6xl mx-auto py-3">
        <Image src={logo} height={40} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
