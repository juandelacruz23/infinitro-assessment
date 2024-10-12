import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="rounded-lg bg-slate-800 px-4 py-6">{children}</article>
  );
};

export default Card;
