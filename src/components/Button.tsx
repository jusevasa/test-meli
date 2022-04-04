import React from 'react';
import { FC } from 'react';

export type Props = {
  children: string;
};

export const Button: FC<Props> = ({ children }) => {
  return <button className="bg-blue-ml rounded-md w-full text-white-ml p-2">{children}</button>;
};
