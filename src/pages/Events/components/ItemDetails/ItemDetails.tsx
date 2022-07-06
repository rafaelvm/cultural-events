import { IEventList } from "context/types";

interface ItemDetailsPros {
  eventDetails?: IEventList
}

const ItemDetails: React.FC<ItemDetailsPros> = ({eventDetails}) => {
  return (
    <>
      <p>
        <strong>Localização:</strong> {eventDetails?.details?.location}
      </p>
      <p>
        <strong>Temperatura:</strong> {eventDetails?.details?.temperature}
      </p>
      <p>
        <strong>Entrada:</strong> {eventDetails?.details?.entry}
      </p>
      <p>
        <strong>Faixa etária:</strong> {eventDetails?.details?.ageGroup}
      </p>
      <p>
        <strong>Data:</strong> {eventDetails?.details?.date}
      </p>
    </>
  );
};

export default ItemDetails;
