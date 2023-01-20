import { Poppins } from "@next/font/google";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className={poppins.className}>
      <h1>UniGhana</h1>
    </main>
  );
}
