import styled, { css } from "styled-components";

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    select {
      border: 2px solid ${theme.colors.darkBlue};
      border-radius: 4px;
      padding: 6px;

      option {
        color: ${theme.colors.darkBlue};
      }
    }
  `}
`;

export const DetailsWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 32px;
    font-size: 18px;
    font-weight: 500;

    p {
      margin-bottom: 24px;

      strong {
        color: ${theme.colors.darkBlue};
      }
    }
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NotFoundEvent = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.mediumBlue};
    text-align: center;
    padding-top: 56px;
  `}
`;
