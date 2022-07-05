import { ContactData, Container, InfoContainer, Title } from "./styles";
import { FaRegEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>Entre em contato</Title>
      </InfoContainer>
      <ContactData>
        <div>
          <FaRegEnvelope />
          Email:
          <p>contato@eventosculturais.com.br</p>
        </div>
        <div>
          <FaPhoneAlt />
          Telefone:
          <p>(11) 9999-9999</p>
        </div>
        <div>
          <FaWhatsapp />
          Whatsapp:
          <p>(11) 99999-9999</p>
        </div>
      </ContactData>
    </Container>
  );
};
