"use client";

import { Poppins } from "@next/font/google";
import Card from "./Card";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

export default function Home() {
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
