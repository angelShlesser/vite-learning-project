type ButtonTypes = "button" | "submit" | "reset" | undefined;


export interface ButtonProps {
  name: string;
  disabled?: boolean;
  isRed?: boolean;
  type?: ButtonTypes;
  onClick?: () => void;
}