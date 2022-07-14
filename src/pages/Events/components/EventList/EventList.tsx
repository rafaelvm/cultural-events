import {
  Container,
  ContentWrapper,
  Details,
  IconRating,
  Image,
} from "./styles";
import { FcRating } from "react-icons/fc";
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
            <Details onClick={() => onClick(event)}>Ver mais</Details>
            <IconRating data-tooltip="Avaliação do evento">
              <FcRating />
              {event.rating}
            </IconRating>
          </div>
        </ContentWrapper>
      ))}
    </Container>
  );
};
