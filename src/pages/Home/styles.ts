import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    p {
      color: ${theme.colors.primaryOrange};
      font-size: 24px;
      margin: 52px 0 40px 12px;
    }
  `}
`;
