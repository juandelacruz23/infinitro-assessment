import classNames from "classnames";
import { FC } from "react";

interface Title3Props {
  children: string;
  alignment?: "center";
}

const Title3: FC<Title3Props> = ({ children, alignment }) => {
  const className = classNames("opacity-70", alignment && `text-${alignment}`)
  return (
    <h3 className={className}>
      {children}
    </h3>
  );
};

export default Title3;