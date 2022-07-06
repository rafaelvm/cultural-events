import { Container, ContentWrapper, Details, Image } from "./styles";
interface EventListProps {
  children: any;
  onClick?: (value: any) => void;
}

export const EventList: React.FC<EventListProps> = ({ children, onClick }) => {
  return (
    <Container>
      {children?.map((event) => (
        <ContentWrapper key={event.id}>
          <Image src={event.image} alt={event.image} />
          <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <Details onClick={onClick}>Ver mais</Details>
          </div>
        </ContentWrapper>
      ))}
    </Container>
  );
};