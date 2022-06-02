import { Container, ContentWrapper } from "./styles";

export const Home: React.FC = () => {
  const events = [
    {
      title: "Concerto musical da Juma",
      description:
        "Juma fará uma apresentação bem empolgante sobre sua transformação...",
      image: "",
    },
    {
      title: "Cinema ao ar livre",
      description:
        "Chegue com seu veículo, de qualquer tipo, e acomode-se para um excelente curta",
      image: "",
    },
    {
      title: "Natação para crianças",
      description:
        "Traga seu filho ou filha para uma tarde com muita água e diversão",
      image: "",
    },
    {
      title: "Dança romântica no meio da floresta",
      description:
        "Venha aproveitar uma dança bem sensual com seu par ao som da natureza",
      image: "",
    },
  ];
  return (
    <Container>
      {events.map((event, index) => (
        <ContentWrapper key={index} onClick={() => console.log("ok")}>
          <div>Imagem do evento</div>
          <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </ContentWrapper>
      ))}
    </Container>
  );
};
