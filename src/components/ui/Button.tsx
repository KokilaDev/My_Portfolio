import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`
      px-6 py-3 rounded-xl font-medium transition duration-300
      ${variant === "primary" 
        ? "bg-[var(--primary)] text-white hover:opacity-80"
        : "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
      }
    `}>
      {children}
    </button>
  );
};

export default Button;