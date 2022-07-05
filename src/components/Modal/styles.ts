import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${theme.colors.background};
    padding-bottom: 20px;
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 4rem;
    gap: 16px;

    button {
      height: 40px;
      width: 150px;
      font-weight: 700;
      transition: all 0.3;

      &:hover {
        opacity: 0.7;
      }
    }
  `}
`;
