import { ReactNode } from "react";

interface CardProps {
  heading?: string;
  description?: string;
  children: ReactNode;
}
const Card = ({ heading, description, children }: CardProps) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default Card;
