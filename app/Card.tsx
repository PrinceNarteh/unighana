import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const Card = () => {
  return (
    <div className="relative bg-rose-500 max-w-md p-5 h-52 rounded-lg group overflow-hidden cursor-pointer">
      <h3 className="truncate font-bold text-xl mb-2 text-gray-800">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea consequatur
        esse exercitationem aperiam minus laboriosam ipsum illo. Sunt sint amet,
        eos dolor numquam, repudiandae accusamus ad pariatur perspiciatis illum
        et!
      </h3>
      <p className="line-clamp-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id
        reprehenderit quas ipsum quasi odit officia at repellendus fugit,
        suscipit ab odio labore aliquam eum similique laudantium inventore
        repudiandae non. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Dolorem id reprehenderit quas ipsum quasi odit officia at
        repellendus fugit, suscipit ab odio labore aliquam eum similique
        laudantium inventore repudiandae non.
      </p>
      <p className="absolute bottom-5 text-gray-800/80">20th Jan, 2023</p>

      {/* Options */}
      <div className="absolute h-full right-0 top-0 bg-white bg-opacity-10 border-l border-l-white text-white flex flex-col justify-center px-2 text-2xl gap-5 transition-all translate-x-14 group-hover:-translate-x-0 duration-300 shadow-xl">
        <BiEdit className="cursor-pointer hover:scale-110" />
        <MdOutlineDelete className="cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default Card;
