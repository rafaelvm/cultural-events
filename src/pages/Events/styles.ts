import styled, { css } from "styled-components";

export const Container = styled.div`
  margin: 32px auto auto;
  gap: 10px;
  max-width: 1200px;
  padding: 0.5rem;
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    select {
      border: 2px solid ${theme.colors.primaryBlue};
      border-radius: 4px;
      padding: 6px;

      option {
        color: ${theme.colors.primaryOrange};
      }
    }
  `}
`;

export const DetailsWrapper = styled.div`
  margin-top: 32px;
  font-size: 18px;
  font-weight: 500;

  p {
    margin-bottom: 24px;

    strong {
      color: blue;
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
