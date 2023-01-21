"use client";

import { useEffect } from "react";
import { Poppins } from "@next/font/google";
import Card from "./Card";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { fetchNotes, selectAllNotes } from "@/features/notes/notesSlice";
import { useAppDispatch } from "@/store";
import Form from "./Form";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

export default function Home() {
  const notes = useSelector(selectAllNotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  return (
    <main className={poppins.className}>
      <Navbar />
      <SearchBar />
      <div className="max-w-5xl mx-auto">
        <div className="grid-auto-fit gap-5 p-5">
          {notes.map((note, idx) => (
            <Card note={note} key={idx} />
          ))}
        </div>
      </div>
      <Form />
    </main>
  );
}
