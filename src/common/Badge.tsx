import classNames from "classnames";
import { FC } from "react";

interface BadgeProps {
  children: string;
  variant?: "light" | "dark" | "alert";
  fontSize?: "sm" | "xs";
}

const Badge: FC<BadgeProps> = ({
  children,
  variant = "light",
  fontSize = "sm",
}) => {
  const className = classNames(
    "inline-block font-bold py-1 px-2 rounded-lg",
    `text-${fontSize}`,
    variant == "light" && "bg-white text-black",
    variant == "dark" && "bg-black",
    variant == "alert" && "bg-amber-400 text-black",
  );
  return <span className={className}>{children}</span>;
};

export default Badge;
