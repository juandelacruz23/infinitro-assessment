import { FC } from 'react';

const Link: FC<{ children: string, to?: string }> = ({ children, to = "#" }) => {
  return (
    <a href={to}>
      {children}
    </a>
  );
};

export default Link;