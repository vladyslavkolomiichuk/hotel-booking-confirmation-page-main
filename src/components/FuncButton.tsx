import React, { ButtonHTMLAttributes } from 'react';

type FuncButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const FuncButton = ({ children, ...props }: FuncButtonProps) => {
  return (
    <button
      type={props.type}
      {...props}
      className="px-100 py-050 rounded-full border border-neutral-400 text-neutral-600 text-preset-10 uppercase leading-none hover:bg-neutral-400 focus-visible:outline-3 focus-visible:outline-terracotta-600 focus-visible:outline-offset-2"
    >
      {children}
    </button>
  );
};

export default FuncButton;
