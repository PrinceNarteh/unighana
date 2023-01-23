import { INote } from "@/types/note";
import Link from "next/link";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const Card = ({ idx, note }: { idx: number; note: INote }) => {
  const { title, content, _id } = note;

  return (
    <div
      className={`h-52 p-5 relative group overflow-hidden cursor-pointer shadow-md bg-gradient-to-br rounded-lg ${
        idx % 2 === 0
          ? "from-[#d35341] to-[#fd8271]"
          : "from-[#088181] to-[#088181]"
      }
    `}
    >
      <Link href={`/${_id}`} className={`text-white max-w-md`}>
        <h3 className="truncate font-bold text-xl mb-2 border-b border-b-gray-400/70 pb-1">
          {title}
        </h3>
        <p className="line-clamp-4 text-gray-300 h-24">{content}</p>
        <p className="absolute bottom-5">20th Jan, 2023</p>
      </Link>
      {/* Options */}
      <div className="absolute h-full right-0 top-0 bg-white bg-opacity-10 border-l border-l-white text-white flex flex-col justify-center px-[10px] text-2xl gap-5 transition-all translate-x-14 group-hover:-translate-x-0 duration-300 shadow-xl">
        <Link href={`/${_id}/edit`}>
          <BiEdit className="cursor-pointer hover:scale-125 duration-200" />
        </Link>
        <MdOutlineDelete className="cursor-pointer hover:scale-125 duration-200" />
      </div>
    </div>
  );
};

export default Card;
