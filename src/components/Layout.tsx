import { FC } from 'react';

export type Props = {
  children: React.ReactNode;
};

export const Layout: FC = ({ children }) => {
  return <main className="container mx-auto px-4 h-full">{children}</main>;
};
