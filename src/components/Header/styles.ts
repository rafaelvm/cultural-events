import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.background};
  `}
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    text-align: center;
  }

  svg {
    width: 120px;
    height: 120px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
