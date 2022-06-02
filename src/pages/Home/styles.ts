import styled from "styled-components";

export const Container = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 24px;
`;

export const ContentWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primaryBlue};
  border-radius: 8px;
  max-width: 550px;
  width: 100%;
  height: 250px;
  padding: 24px;
  cursor: pointer;
  user-select: none;

  display: grid;
  grid-template-columns: 200px auto;
  gap: 24px;
`;
