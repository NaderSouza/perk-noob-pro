import { useState } from "react";
import Image from "next/image";
import { Noto_Sans_Lao } from "next/font/google";

const noto = Noto_Sans_Lao({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`flex justify-center items-center min-h-screen min-w-screen bg-woods ${noto.className}`}
    >
      <section className="rounded-xl min-w-screen-2xl p-5 bg-slate-900">
        <div className="flex flex-col items-center text-center  sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={100}
            height={100}
            src="/birl.svg"
            alt=""
            className="max-w-[100px]"
          />
        </div>
      </section>
    </main>
  );
}
