"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete, MdArrowBackIos } from "react-icons/md";

const NoteDetails = () => {
  const router = useRouter();

  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-3xl border-b border-b-gray-300 pb-2 text-center text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        libero.
      </h3>
      <div className="flex justify-between text-gray-700 text-3xl my-3 px-3">
        <MdArrowBackIos
          className="cursor-pointer hover:scale-110 duration-200"
          onClick={() => router.push("/")}
        />
        <div className="flex gap-3">
          <BiEdit className="cursor-pointer text-teal-500 hover:scale-110 duration-200" />
          <MdOutlineDelete className="cursor-pointer text-[red] hover:scale-110 duration-200" />
        </div>
      </div>
      <p className="text-xl text-gray-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus corporis
        laudantium possimus nesciunt atque molestiae, fugiat aperiam, quos
        delectus explicabo quas illum, earum adipisci iste? Architecto
        cupiditate pariatur aut et.
      </p>
    </div>
  );
};

export default NoteDetails;
