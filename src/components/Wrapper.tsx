import React from 'react';
import { FC } from 'react';

export type Props = {
  children?: React.ReactNode;
};

export const Wrapper: FC<Props> = ({ children }) => {
  return <section className="flex flex-col w-full mt-4">{children}</section>;
};
