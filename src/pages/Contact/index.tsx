import { ContactData, Container, Title } from "./styles";
import { FaRegEnvelope, FaPhoneAlt, FaLocationArrow } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Entre em contato</Title>
      </Container>
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
          <FaLocationArrow />
          Whatsapp:
          <p>(11) 99999-9999</p>
        </div>
      </ContactData>
    </>
  );
};
