import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

export type ButtonProps = {
  children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};
