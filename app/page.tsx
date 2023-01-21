"use client";

import { useEffect } from "react";
import { Poppins } from "@next/font/google";
import Card from "./Card";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { fetchNotes, selectAllNotes } from "@/features/notes/notesSlice";
import { RootState, useAppDispatch } from "@/store";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

export default function Home() {
  const notes = useSelector(selectAllNotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  console.log(notes);

  return (
    <main className={poppins.className}>
      <Navbar />
      <SearchBar />
      <div className="max-w-5xl mx-auto">
        <div className="grid-auto-fit gap-5 p-5">
          {Array(10)
            .fill(null)
            .map((_, idx) => (
              <Card key={idx} />
            ))}
        </div>
      </div>
    </main>
  );
}
