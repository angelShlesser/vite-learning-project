import styled from "@emotion/styled";

interface ButtonComponentProps {
  isRed: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 4px;
  /* background-color: ${({ isRed, disabled }) =>
    isRed ? "red" : disabled ? "grey" : "#1f27f5"}; */
  background-color: ${({ isRed, disabled }) => {
    if (isRed) {
      return "red";
    }

    if (disabled) {
      return "grey";
    }

    return "#1f27f5";
  }};
  color: white;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
