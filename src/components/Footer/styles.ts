import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBlue};
    height: 100px;
    margin-top: 158px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
  `}
`;
