import React, { useState } from "react";
import Image from "next/image";
import { Orbitron } from "next/font/google";

import Button from "../components/buttons/Button";
import Modal from "../components/modals/Modal";

const orbitron = Orbitron({ subsets: ["latin"] });

const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  const openModal = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    setSelectedName(randomName);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <Button onClick={openModal} type="submit" success>
            Sortear
          </Button>
          <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="p-4">
              <h1 className="text-lg font-bold mb-2">Nome Sorteado</h1>
              <p>{selectedName}</p>
              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={closeModal}
              >
                Fechar Modal
              </button>
            </div>
          </Modal>
        </div>
      </section>
    </main>
  );
}
