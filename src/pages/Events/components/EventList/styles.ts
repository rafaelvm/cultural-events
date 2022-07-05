import styled, { css } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.darkBlue};
    border-radius: 8px;
    height: 250px;
    padding: 24px;
    cursor: pointer;
    user-select: none;
    box-shadow: 1px 1px 5px ${theme.colors.darkBlue};
    display: grid;
    grid-template-columns: 200px auto;

    h3 {
      margin-bottom: 10px;
    }
  `}
`;

export const Svg = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  width: 120px;
  height: 120px;
`;

export const Details = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.ciano};
    font-weight: 600;
    margin-top: 24px;
  `}
`;
