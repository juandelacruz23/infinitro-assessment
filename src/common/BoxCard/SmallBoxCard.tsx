import { FC } from "react";
import Box from "../../types/Box";
import Title4 from "../Title4";

const SmallBoxCard: FC<Box> = ({ imageUrl, name, description, creator }) => {
  return (
    <article className="flex bg-slate-800 rounded-lg max-h-20">
      <img
        className="h-16 ml-10 my-auto"
        src={imageUrl}
        alt={`${name} image`}
      />
      <header className="w-60 p-2.5">
        <Title4>{name}</Title4>
        <p className="opacity-70 text-xs">{description}</p>
        <span className="text-xs">{creator}</span>
      </header>
    </article>
  );
};

export default SmallBoxCard;
