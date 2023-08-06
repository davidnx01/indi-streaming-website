'use client';

import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";


interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: any;
  maxW?: boolean;
  bordered?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label, onClick, href, icon: Icon, maxW, bordered, className
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(`
        py-2.5
        px-7
        border 
        border-[#FF4E4E]
        text-white
        outline-none
        flex
        items-center
        justify-center
        bg-[#FF4E4E]
        rounded-[2.5rem]
        font-light
        gap-2
        hover:bg-[#a53e3e]
        hover:border-[#a53e3e]
        transition
        ease-in
        ${className}
      `,
      maxW && "w-full",
      bordered && `bg-transparent text-[#FF4E4E] 
      hover:text-[#e26363] hover:bg-transparent hover:border-[#e26363]`,
    )}>
      {Icon && (
        <Icon 
          size={24}
        />
      )}
      {label}
    </button>
  )
}

export default Button