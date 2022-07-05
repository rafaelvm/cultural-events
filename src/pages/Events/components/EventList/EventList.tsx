import { Container, ContentWrapper, Details, Svg } from "./styles";

interface EventListProps {
  children: any;
  toggleModal?: React.MouseEventHandler<HTMLButtonElement>;
}

export const EventList: React.FC<EventListProps> = ({
  children,
  toggleModal,
}) => {
  return (
    <Container>
      {children?.map((event) => (
        <ContentWrapper key={event.id}>
          <Svg>{event.image}</Svg>
          <div>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <Details onClick={() => toggleModal(event.id)}>Ver mais</Details>
          </div>
        </ContentWrapper>
      ))}
    </Container>
  );
};
