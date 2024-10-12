import { FC } from "react";

const CardSubtitle: FC<{ children: string }> = ({ children }) => {
  return <p className="font-bold capitalize">{children}</p>;
};

export default CardSubtitle;
