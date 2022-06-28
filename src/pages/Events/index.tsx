import { DetailsModal } from "components/Modal";
import { useState } from "react";
import { EventList } from "./components/EventList/EventList";
import { events } from "./constants";
import { Container, DetailsWrapper } from "./styles";

export const Events: React.FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen((prevState) => !prevState);
  };

  return (
    <Container className="mainContainer">
      <div onClick={toggleDetailsModal}>
        <EventList toggleModal={() => console.log("Ok")}>{events}</EventList>
      </div>

      <DetailsModal
        title="Detalhes do evento"
        isOpen={isDetailsModalOpen}
        onRequestClose={toggleDetailsModal}
      >
        <DetailsWrapper>
          <p>
            <strong>Localização:</strong> São Paulo - SP
          </p>
          <p>
            <strong>Temperatura:</strong> 17°C - 28°C
          </p>
          <p>
            <strong>Entrada:</strong> Gratuita
          </p>
          <p>
            <strong>Faixa etária:</strong> Livre
          </p>
          <p>
            <strong>Data:</strong> 20 de Setembro, com ínicio às 14h
          </p>
        </DetailsWrapper>
      </DetailsModal>
    </Container>
  );
};
