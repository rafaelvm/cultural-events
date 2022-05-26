import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

export type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
