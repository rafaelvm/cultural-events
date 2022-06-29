import styled, { css } from "styled-components";

export const Navbar = styled.nav`
  ${({ theme }) => css`
    ul {
      list-style: none;
      display: flex;
      gap: 32px;
      cursor: pointer;

      li {
        font-size: 1.5rem;

        transition: all 0.2;

        &:hover {
          opacity: 0.8;
        }

        a {
          text-decoration: none;
          color: ${theme.colors.primaryOrange};
          display: flex;
          align-items: center;
        }

        svg {
          width: 35px;
          height: 20px;
        }
      }
    }

    .activeLink {
      color: ${theme.colors.primaryBlue};
      text-decoration: underline;
    }
  `}
`;
