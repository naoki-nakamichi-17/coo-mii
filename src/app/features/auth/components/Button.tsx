import { ReactNode } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: ReactNode;
  colorClass: string;
  onClick?: () => void;
}

const Button = ({ children: label, type, colorClass, onClick }: ButtonProps) => {
  const baseClasses = "text-white font-bold py-2 px-4 rounded focus:outline-none"
  return (
    <button type={type} className={`${baseClasses} ${colorClass}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;