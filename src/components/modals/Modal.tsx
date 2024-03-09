import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <div
      className={`${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0"></div>
        </div>

        <div className="bg-black text-zinc-50 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
          {children}
          <button
            className="mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={closeModal}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
