import classNames from "classnames";
import { CSSProperties, FC, PropsWithChildren } from "react";

const style: CSSProperties = {
  background:
    "linear-gradient(358.1deg, rgba(95, 159, 255, 0.2244) 1.9%, rgba(43, 43, 43, 0.2924) 98.69%)",
  backdropFilter: "blur(33px)",
};

const Card: FC<PropsWithChildren & { className?: string }> = ({
  children,
  className,
}) => {
  return (
    <article
      className={classNames("rounded-lg px-4 py-6", className)}
      style={style}
    >
      {children}
    </article>
  );
};

export default Card;
