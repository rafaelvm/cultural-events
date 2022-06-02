import { Container } from "./styles";
import { EventList } from "./components/EventList/EventList";
import { ReactComponent as Logo } from "assets/logo.svg";

export const Home: React.FC = () => {
  const events = [
    {
      id: 0,
      title: "Concerto musical da Juma",
      description:
        "Juma fará uma apresentação bem empolgante sobre sua transformação...",
      image: <Logo />,
    },
    {
      id: 1,
      title: "Cinema ao ar livre",
      description:
        "Chegue com seu veículo, de qualquer tipo, e acomode-se para um excelente curta",
      image: <Logo />,
    },
    {
      id: 2,
      title: "Natação para crianças",
      description:
        "Traga seu filho ou filha para uma tarde com muita água e diversão",
      image: <Logo />,
    },
    {
      id: 3,
      title: "Dança romântica no meio da floresta",
      description:
        "Venha aproveitar uma dança bem sensual com seu par ao som da natureza",
      image: <Logo />,
    },
  ];
  return (
    <Container>
      <EventList>{events}</EventList>
    </Container>
  );
};
