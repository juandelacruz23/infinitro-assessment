import classNames from "classnames";
import { FC } from "react";

interface CardTextProps {
  children: string;
  textAlign?: "center";
}

const CardText: FC<CardTextProps> = ({ children, textAlign }) => {
  return (
    <p
      className={classNames(
        "text-xs opacity-70",
        textAlign && `md:text-${textAlign}`,
      )}
    >
      {children}
    </p>
  );
};

export default CardText;
