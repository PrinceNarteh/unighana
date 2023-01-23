"use client";

import Form from "@/app/Form";
import { selectAllNotes } from "@/features/notes/notesSlice";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { openModal } from "@/features/modal/modalSlice";

interface IEditNote {
  params: {
    noteId: string;
  };
}

const EditNote = ({ params }: IEditNote) => {
  const notes = useSelector(selectAllNotes);
  const note = notes.find((note) => note._id === params.noteId);
  const dispatch = useAppDispatch();

  dispatch(openModal());

  return (
    <div className="max-w-5xl mx-auto">
      <Form note={note} />
    </div>
  );
};

export default EditNote;
