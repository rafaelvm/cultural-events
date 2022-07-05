import styled, { css } from "styled-components";

export const InputWrapper = styled.input`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.disableBg};
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    transition: 0.3s;
    height: 2.5rem;
    width: 30%;

    &:focus {
      border-color: ${theme.colors.primaryBlue};
      box-shadow: 0 0 8px 0 ${theme.colors.primaryBlue};
    }
  `}
`;
