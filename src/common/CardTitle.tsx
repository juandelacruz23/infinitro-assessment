import { FC } from "react";

const CardTitle: FC<{ children: string }> = ({ children }) => {
  return <h2 className="text-2xl font-bold capitalize">{children}</h2>;
};

export default CardTitle;
