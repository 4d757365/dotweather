import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  handleChange: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, handleChange, setLocation, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `flex 
          w-full 
          rounded-md 
           
          border 
          border-neutral-400/40
          px-3 py-3
          text-md
          file:border-0
          file:bg-transparent
          file:text-sm
          file:font-medium 
          placeholder:text-neutral-400
          disabled:cursor-not-allowed
          disabled:opacity-50
          focus:outline-none     
          `,
          className
        )}
        disabled={disabled}
        ref={ref}
        onKeyDown={handleChange}
        onChange={(e) => {
          console.log(e.target.value, setLocation(e.target.value));
        }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
