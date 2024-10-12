import classNames from "classnames";
import { FC } from "react";

interface BadgeProps {
  children: string;
  variant?: "light";
}

const Badge: FC<BadgeProps> = ({ children, variant = "light" }) => {
  const className = classNames(
    "inline-block font-bold py-1 px-2 rounded-lg",
    variant == "light" && "bg-white text-black",
  );
  return <span className={className}>{children}</span>;
};

export default Badge;
