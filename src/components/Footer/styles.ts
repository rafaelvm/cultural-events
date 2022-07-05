import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBlue};
    height: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Wrapper = styled.div`
  font-weight: 600;
`;
