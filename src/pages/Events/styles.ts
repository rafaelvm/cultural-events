import styled from "styled-components";

export const Container = styled.div`
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 24px;
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
