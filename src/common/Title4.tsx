import classNames from "classnames";
import { FC } from "react";

interface Title4Props {
  children: string;
  alignment?: "center";
  opacity?: boolean;
}

const Title4: FC<Title4Props> = ({ children, alignment, opacity }) => {
  const className = classNames(
    "text-sm",
    opacity && "opacity-70",
    alignment && `text-${alignment}`,
  );
  return <h4 className={className}>{children}</h4>;
};

export default Title4;
