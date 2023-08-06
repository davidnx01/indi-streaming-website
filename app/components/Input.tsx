interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  type, placeholder, className
}) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      className={`
        max-w-[285px]
        w-full
        border-b
        border-neutral-300
        py-2
        pr-1
        outline-none
        text-neutral-300
        placeholder:text-neutral-300
        bg-transparent
        text-normal
        focus:text-white
        focus:border-white
        transition
        ease-in
        ${className}
      `}
    />
  )
}

export default Input