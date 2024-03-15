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
          ? "opacity-100 pointer-events-auto transition-opacity duration-300"
          : "opacity-0 pointer-events-none transition-opacity duration-300"
      } fixed z-10 inset-0 overflow-y-auto`}
    >
      <div className="flex items-center justify-center text-center min-h-screen">
        <div className="fixed inset-0" aria-hidden="true">
          <div className="absolute inset-0"></div>
        </div>

        <div className="bg-zinc-700 rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
          <div className="flex justify-end">
            <button
              className="text-white border-spacing-1 hover:text-blue-200 p-2"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
          <div className="justify-center p-14">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
