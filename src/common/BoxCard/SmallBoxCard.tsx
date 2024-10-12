import { CSSProperties, FC } from "react";
import Box from "../../types/Box";
import Title4 from "../Title4";

const cardStyle: CSSProperties = {
  background:
    "linear-gradient(5.45deg, rgba(45, 54, 67, 0.5412) 3.56%, rgba(32, 32, 32, 0.82) 96.62%)",
  backdropFilter: "blur(33px)",
};

// Couldn't make this work, better luck next time
const imgStyle: CSSProperties = {
  background:
    "linear-gradient(358.1deg, rgba(95, 159, 255, 0.2244) 1.9%, rgba(43, 43, 43, 0.2924) 98.69%)",
  backdropFilter: "blur(33px)",
};

const SmallBoxCard: FC<Box> = ({ imageUrl, name, description, creator }) => {
  return (
    <a href="#">
      <article className="flex rounded-lg max-h-20" style={cardStyle}>
        <img
          style={imgStyle}
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
    </a>
  );
};

export default SmallBoxCard;
