import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-2xl p-6 bg-[var(--surface)] border border-slate-200 dark:border-slate-700 shadow-lg transition hover:-translate-y-2">
      {children}
    </div>
  );
};

export default Card;