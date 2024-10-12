import { FC } from "react";

const CardText: FC<{ children: string }> = ({ children }) => {
  return <p className="opacity-70">{children}</p>;
};

export default CardText;
