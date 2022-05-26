import styled from "styled-components";

export const ButtonContainer = styled.button`
  margin-top: 8px;
  padding: 4px;
  border: none;
  background-color: var(--red);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  align-self: flex-end;
  color: white;
  font-weight: 400;
  border-radius: 8px;
  &:active {
    background-color: var(--red);
  }
`;
