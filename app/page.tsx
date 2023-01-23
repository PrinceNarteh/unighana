"use client";

import { fetchNotes, selectAllNotes } from "@/features/notes/notesSlice";
import { useAppDispatch } from "@/store";
import { Poppins } from "@next/font/google";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import Form from "./Form";
import SearchBar from "./SearchBar";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

export default function Home() {
  const notes = useSelector(selectAllNotes);
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <main className={poppins.className}>
      <SearchBar setOpenModal={setOpenModal} />
      <div className="max-w-5xl mx-auto">
        <div className="grid-auto-fit gap-5 p-5">
          {notes.map((note, idx) => (
            <Card note={note} key={idx} idx={idx} />
          ))}
        </div>
      </div>
      {openModal && <Form setOpenModal={setOpenModal} />}
    </main>
  );
}
