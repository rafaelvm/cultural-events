import { InputHTMLAttributes } from "react";
import { InputWrapper } from "./styles";

export type InputProps = {
  label?: string;
  type?: "password" | "text";
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: InputProps) => {
  return (
    <InputWrapper
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
