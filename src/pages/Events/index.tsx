import { Input } from "components/Input";
import { DetailsModal } from "components/Modal";
import { useEffect, useMemo, useState } from "react";
import { autoCapitalize } from "utils/autoCapitalize";
import { EventList } from "./components/EventList/EventList";
import { events } from "./constants";
import {
  Container,
  DetailsWrapper,
  InfoWrapper,
  SearchContainer,
} from "./styles";
import ItemDetails from "./components/ItemDetails/ItemDetails";

export const Events: React.FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [search, setNewSearch] = useState("");

  const filteredEvents = events.reduce((acc, current) => {
    const filter = acc.find((item) => item.category === current.category);
    if (!filter) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen((prevState) => !prevState);
  };

  const getFilteredList = () => {
    if (!selectedCategory) {
      return eventList;
    }
    return eventList.filter((item) => item.category === selectedCategory);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredList = useMemo(getFilteredList, [selectedCategory, eventList]);

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const filteredLowerCase = search.toLowerCase();

  const filtered =
    search.length >= 3
      ? eventList.filter((item) =>
          item.title.toLowerCase().includes(filteredLowerCase)
        )
      : events;

  useEffect(() => {
    setEventList(events);
  }, []);

  return (
    <Container>
      <SearchContainer>
        <Input
          value={search || ""}
          name="text"
          type="text"
          placeholder="Procure pelo nome do evento"
          onChange={handleSearchChange}
        />

        <InfoWrapper>
          <h3>Filtrar por categoria:</h3>
          <select name="category-list" onChange={handleCategoryChange}>
            <option value="">Todos</option>
            {filteredEvents.map((item) => (
              <option key={item.id} value={item.category}>
                {autoCapitalize(item.category)}
              </option>
            ))}
          </select>
        </InfoWrapper>
      </SearchContainer>

      <div onClick={toggleDetailsModal}>
        <EventList toggleModal={() => console.log("Ok")}>
          {filteredList}
        </EventList>
      </div>

      <DetailsModal
        title="Detalhes do evento"
        isOpen={isDetailsModalOpen}
        onRequestClose={toggleDetailsModal}
      >
        <DetailsWrapper>
          <ItemDetails />
        </DetailsWrapper>
      </DetailsModal>
    </Container>
  );
};
