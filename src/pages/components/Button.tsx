import { ComponentProps } from "react";
import { CheckCircle, Skull } from "lucide-react";

export type ButtonProps = ComponentProps<"button"> & {
  success?: boolean;
};

const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

export default function Button({ success = false, ...props }: ButtonProps) {
  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  };

  const handleClick = () => {
    const randomName = generateRandomName();
    alert(`Random Name: ${randomName}`);
  };

  return (
    <button
      className={`rounded px-4 h-9 text-sm font-bold py-2 px-4 text-zinc-900 bg-bo2 hover:bg-bo2-dark`}
      onClick={handleClick}
      {...props}
    >
      {props.children}
      {success && <Skull className="w-4 h-4 inline ml-1" />}
    </button>
  );
}

export function ButtonModal({ success = false, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded px-4 h-9 text-sm font-medium text-zinc-900 bg-yellow-500 hover:bg-yellow-600`}
      {...props}
    >
      {props.children}
      {success && <CheckCircle className="w-4 h-4 inline ml-1" />}
    </button>
  );
}
export function ButtonModalCalc({ success = false, ...props }: ButtonProps) {
  return (
    <button
      className={`rounded px-4 h-9 text-sm font-medium text-zinc-900 bg-emerald-500 hover:bg-emerald-600`}
      {...props}
    >
      {props.children}
      {success && <CheckCircle className="w-4 h-4 inline ml-1" />}
    </button>
  );
}
