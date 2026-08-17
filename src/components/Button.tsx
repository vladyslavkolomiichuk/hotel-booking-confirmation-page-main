import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
};

const Button = ({ children, variant, ...props }: ButtonProps) => {
  const baseClasses =
    'text-preset-5-semibold py-125 px-200 w-full sm:w-[164px] md:px- rounded-full focus-visible:outline-3 focus-visible:outline-terracotta-600 focus-visible:outline-offset-2';

  const variantClasses = {
    dark: 'text-sun-50 bg-neutral-900 hover:bg-neutral-800',
    light: 'text-neutral-900 border border-neutral-400 hover:bg-neutral-200',
  };

  return (
    <button
      className={`${baseClasses} ${variant && variantClasses[variant]}`}
      type={props.type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
