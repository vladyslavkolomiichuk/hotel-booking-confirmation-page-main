import { HTMLAttributes, ReactNode } from 'react';

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  button: ReactNode;
};

const Header = ({ button, ...props }: HeaderProps) => {
  return (
    <div
      {...props}
      className={`flex items-center justify-between ${props.className}`}
    >
      <img src="/assets/images/logo.svg" alt="Maison Soleil" />
      {button}
    </div>
  );
};

export default Header;
