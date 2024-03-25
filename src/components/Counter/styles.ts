import styled from "@emotion/styled";

export const CounterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  min-width: 400px;
  max-width: fit-content;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(26, 35, 53);
  color: white;
`;

export const ButtonControl = styled.div`
  width: 80px;
`;

export const Count = styled.p`
  font-size: 40px;
  color: white;
`;
