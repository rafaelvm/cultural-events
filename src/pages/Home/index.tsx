import { CarouselComponent } from "./components/CarouselComponent/CarouselComponent";
import { Container } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container className="mainContainer">
      <p>
        Bem vindo (a) plataforma de eventos culturais. Procure por eventos
        gratuitos como teatro, cinema nacional, entre outros.
      </p>
      <CarouselComponent />
    </Container>
  );
};
