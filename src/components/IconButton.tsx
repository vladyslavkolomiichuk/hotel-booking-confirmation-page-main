import { ButtonHTMLAttributes } from 'react';

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  label: string;
};

const IconButton = ({ icon, label, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      className={` border border-neutral-400 rounded-4 p-075 hover:bg-neutral-200 focus-visible:outline-3 focus-visible:outline-terracotta-600 focus-visible:outline-offset-2 ${props.className}`}
      type={props.type}
    >
      <img src={icon} alt={label} className="w-20px h-20px" />
    </button>
  );
};

export default IconButton;
