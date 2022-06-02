import { Container, ContentWrapper, Svg } from "./styles";

interface EventListProps {
  children?: any;
}

export const EventList: React.FC<EventListProps> = ({ children }) => {
  return (
    <Container>
      {children?.map((event: any) => (
        <ContentWrapper key={event.id} onClick={() => console.log("ok")}>
          <Svg>{event.image}</Svg>

          <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </div>
        </ContentWrapper>
      ))}
    </Container>
  );
};
