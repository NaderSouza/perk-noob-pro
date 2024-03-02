import { useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

import Button from "./components/Button";

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
          <h2 className="mb-5 text-center font-extrabold text-2xl leading-9 tracking-tight text-white">
            Sorteador de Perk Noob Pro
          </h2>
        </div>

        <div className="flex h-full justify-center items-center rounded-md px-4 py-1.5 ">
          <Button type="submit" success>
            Sortear
          </Button>
        </div>
      </section>
    </main>
  );
}
