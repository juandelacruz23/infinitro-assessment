import { FC } from "react";

const Link: FC<{ children: string; to?: string }> = ({
  children,
  to = "#",
}) => {
  return (
    <a className="text-sm" href={to}>
      {children}
    </a>
  );
};

export default Link;
