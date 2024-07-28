import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={`flex rounded-lg bg-primary px-6 py-3 font-bold text-white hover:cursor-pointer hover:bg-red-900 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
