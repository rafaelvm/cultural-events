import styled, { css } from "styled-components";

export const Container = styled.div`
  background-image: url("https://img.freepik.com/fotos-gratis/atendimento-ao-cliente-e-conceito-de-contato-comercial-bloco-de-cubo-de-madeira-que-imprime-o-endereco-de-e-mail-e-a-mensagem-do-telefone-da-carta-da-tela_616485-45.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 100%;
  height: 250px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 38px;
    padding-right: 100px;
    font-family: cursive;

    @media (max-width: 768px) {
      font-size: 24px;
      padding-top: 150px;
    }
  `}
`;

export const ContactData = styled.section`
  ${({ theme }) => css`
    display: flex;
    background: #f2f5f6;
    padding: 60px 0;
    font-family: cursive;

    div {
      width: 33%;
      height: 111px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 2px solid ${theme.colors.disableBg};
      gap: 12px;

      p {
        color: #777;
      }

      @media (max-width: 768px) {
        border-right: none;
        width: 100%;
        height: 108px;
      }
    }

    div:last-of-type {
      border-right: none;
    }

    @media (max-width: 768px) {
      display: block;
      border-right: none;
      padding: 2px 0 0;
    }
  `}
`;
