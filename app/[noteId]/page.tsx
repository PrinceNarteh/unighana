"use client";

import notFound from "@/assets/images/not-found.png";
import { selectAllNotes } from "@/features/notes/notesSlice";
import { useAppDispatch } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import { MdArrowBackIos, MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { deleteNote } from "@/features/notes/notesSlice";
import { toast } from "react-toastify";

interface INoteDetails {
  params: {
    noteId: string;
  };
}

const NoteDetails = ({ params }: INoteDetails) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const notes = useSelector(selectAllNotes);
  const note = notes.find((note) => note._id === params.noteId);

  const handleDelete = (noteId: string) => {
    dispatch(deleteNote(noteId));
    toast.success("Note deleted successfully");
  };

  return (
    <div className="max-w-5xl mx-auto">
      {!note ? (
        <div className="flex flex-col items-center">
          <Image src={notFound} alt="" />
          <h3 className="text-2xl text-gray-700">Note Not Found</h3>
        </div>
      ) : (
        <>
          <h3 className="text-3xl border-b border-b-gray-300 pb-2 text-center text-gray-600">
            {note?.title}
          </h3>
          <div className="flex justify-between text-gray-700 text-3xl my-3 px-3">
            <MdArrowBackIos
              className="cursor-pointer hover:scale-110 duration-200"
              onClick={() => router.push("/")}
            />
            <div className="flex gap-3">
              <Link href={`/${note._id}/edit`}>
                <BiEdit className="cursor-pointer text-teal-500 hover:scale-110 duration-200" />
              </Link>
              <MdOutlineDelete
                className="cursor-pointer text-[red] hover:scale-110 duration-200"
                onClick={() => handleDelete(note._id)}
              />
            </div>
          </div>
          <p className="text-xl text-gray-500">{note?.content}</p>
        </>
      )}
    </div>
  );
};

export default NoteDetails;
