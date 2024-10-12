import { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({children}) => {
  return (
    <article className='rounded-lg'>
      {children}
    </article>
  );
};

export default Card;