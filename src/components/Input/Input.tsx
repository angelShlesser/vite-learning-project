import { InputProps } from "./types";
import {
  InputContainer,
  InputComponent,
  InputLabel,
  ErrorContainer,
} from "./styles";

function Input({
  id,
  disabled = false,
  name,
  placeholder,
  label,
  type = "text",
  value,
  onChange,
  error,
  isWhite = false
}: InputProps) {
  return (
    <InputContainer>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputComponent
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        isWhite={isWhite}
      />
      {/* {!!error && <ErrorContainer>{error}</ErrorContainer>} */}
      <ErrorContainer>{error}</ErrorContainer>
    </InputContainer>
  );
}

export default Input;
