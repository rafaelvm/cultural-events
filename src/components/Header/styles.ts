import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.colors.background};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 120px;
    height: 120px;
  }
`;

export const Navbar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 32px;
    cursor: pointer;

    li {
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.primaryOrange};
      transition: all 0.2;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
