import { useState } from "react";
import Image from "next/image";
// import { Noto_Sans_Lao } from "next/font/google";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex justify-center items-center min-h-screen min-w-screen bg-bo2 ${orbitron.className}`}
    >
      <section className="rounded-xl min-w-screen-2xl p-5 bg-black">
        <div className="flex flex-col items-center text-center  sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={100}
            height={100}
            src="/bo2.svg"
            alt=""
            className="max-w-[100px]"
          />
        </div>
        <h2 className="mb-5 text-center font-extrabold text-2xl leading-9 tracking-tight text-white">
          Sorteador de Perk Pro
        </h2>
      </section>
    </main>
  );
}
