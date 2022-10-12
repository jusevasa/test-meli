import React from "react";
import { FC } from "react";

export type Props = {
  children: string;
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
};

export const Button: FC<Props> = ({ children, label, type }) => {
  return (
    <button
      className='bg-blue-ml rounded-md w-full text-white-ml p-2'
      name={label}
      type={type}
    >
      {children}
    </button>
  );
};
