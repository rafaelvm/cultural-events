import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 24px;

  svg {
    width: 120px;
    height: 120px;
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primaryBlue};
    border-radius: 8px;
    max-width: 550px;
    width: 100%;
    height: 250px;
    padding: 24px;
    cursor: pointer;
    user-select: none;
    box-shadow: 1px 1px 5px ${theme.colors.primaryBlue};
    display: grid;
    grid-template-columns: 200px auto;
    gap: 24px;

    h3 {
      margin-bottom: 10px;
    }
  `}
`;

export const Svg = styled.div`
  display: flex;
  align-items: center;
`;

export const Details = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primaryOrange};
    font-weight: 600;
  `}
`;
