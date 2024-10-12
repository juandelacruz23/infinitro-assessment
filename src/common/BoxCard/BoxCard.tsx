import { FC } from "react";
import Box from "../../types/Box";
import Title4 from "../Title4";
import Badge from "../Badge";
import formatPrice from "../../utils/formatPrice";

const BoxCard: FC<Box> = ({ name, description, price, state }) => {
  return (
    <article className="rounded-lg bg-slate-800 p-2.5">
      <div className="flex justify-between">
        <Badge variant="dark">{formatPrice(price)}</Badge>
        {state === "new" && <Badge variant="alert">{"New"}</Badge>}
      </div>
      <header className="bg-black rounded-lg p-2.5">
        <Title4>{name}</Title4>
        <p className="opacity-70 text-xs">{description}</p>
      </header>
    </article>
  );
};

export default BoxCard;
