import { ReactNode } from "react";

interface CardProps {
  heading?: string;
  description?: string;
  children: ReactNode;
}
const Card = ({ heading, description, children }: CardProps) => {
  return (
    <div className="flex flex-col flex-wrap gap-1">
      <h3 className="font-[600]">{heading}</h3>
      <p className="text-slate-500">{description}</p>
      {children}
    </div>
  );
};

export default Card;
