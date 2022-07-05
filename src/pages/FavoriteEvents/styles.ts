import styled, { css } from "styled-components";

export const Container = styled.div`
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
        padding: 8px;
        margin: 0;
      }
    }
  }
`;

export const FavoritList = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.mediumBlue};
    font-size: 20px;
    font-weight: bold;
  `}
`;
