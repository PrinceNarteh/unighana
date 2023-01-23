import { Dispatch, SetStateAction } from "react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import { useAppDispatch } from "@/store";
import { openModal } from "@/features/modal/modalSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center gap-5">
      <div className="border flex items-center border-teal-500 max-w-xs w-full rounded-lg p-2">
        <input type="text" className="outline-none w-full text-gray-500" />
        <BiSearchAlt className="text-2xl text-teal-500" />
      </div>
      <button
        onClick={() => dispatch(openModal())}
        className="flex items-center justify-center bg-teal-500 text-white py-2 px-4 rounded-full"
      >
        <MdAdd />
        <span>Add Note</span>
      </button>
    </div>
  );
};

export default SearchBar;
