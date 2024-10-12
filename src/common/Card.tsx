import classNames from "classnames";
import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <article
      className={classNames("rounded-lg bg-slate-800 px-4 py-6", className)}
    >
      {children}
    </article>
  );
};

export default Card;
