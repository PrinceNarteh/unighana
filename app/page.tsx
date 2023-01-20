import { Poppins } from "@next/font/google";
import Card from "./Card";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={poppins.className}>
      <div className="max-w-5xl mx-auto">
        <h1>UniGhana</h1>
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
