import { CSSProperties, FC } from "react";
import Box from "../../types/Box";
import Title4 from "../Title4";
import Badge from "../Badge";
import formatPrice from "../../utils/formatPrice";

const style: CSSProperties = {
  background:
    "linear-gradient(5.45deg, rgba(45, 54, 67, 0.5412) 3.56%, rgba(32, 32, 32, 0.82) 96.62%)",
  backdropFilter: "blur(33px)",
};

const BoxCard: FC<Box> = ({ name, description, price, state, imageUrl }) => {
  return (
    <a href="#">
      <article
        style={style}
        className="rounded-lg p-2.5 flex flex-col justify-between min-h-60 min-w-44 md:min-h-72 md:min-w-56"
      >
        <div className="flex justify-between items-start">
          <Badge variant="dark">{formatPrice(price)}</Badge>
          {state === "new" && (
            <Badge variant="alert" fontSize="xs">
              {"New"}
            </Badge>
          )}
        </div>
        <img className="ml-auto" src={imageUrl} alt={`${name} image`} />
        <header className="bg-black rounded-lg p-2.5">
          <Title4>{name}</Title4>
          <p className="opacity-70 text-xs">{description}</p>
        </header>
      </article>
    </a>
  );
};

export default BoxCard;
