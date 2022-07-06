import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    h1 {
      margin-top: 24px;
    }

    ul {
      list-style-type: none;
      padding: 16px 0;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 24px;

        button {
          transition: all 0.2;
          padding: 8px;
          margin: 0;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  `}
`;

export const FavoriteList = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.mediumBlue};
    font-size: 20px;
    font-weight: bold;
  `}
`;
