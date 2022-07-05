import { Input } from "components/Input";
import { DetailsModal } from "components/Modal";
import { useEffect,  useState } from "react";
import { autoCapitalize } from "utils/autoCapitalize";
import { EventList } from "./components/EventList/EventList";
import { events } from "./constants";
import {
  DetailsWrapper,
  InfoWrapper,
  SearchContainer,
} from "./styles";
import ItemDetails from "./components/ItemDetails/ItemDetails";

export const Events: React.FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [search, setNewSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen((prevState) => !prevState);
  };

  const filteredEvents = events.reduce((acc, current) => {
    const filter = acc.find((item) => item.category === current.category);
    if (!filter) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const handleCategoryChange = (event) => {
    const filteredCategory = eventList.filter(item => {
      if(item.category.toLowerCase().indexOf(event.target.value) > -1) {
        return item
      }
      return null
    })

    setFilteredItem(filteredCategory)
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);

    const filtered = eventList.filter(item => {
      if(item.title.toLowerCase().indexOf(event.target.value) > -1) {
        return item
      }
      if(item.category.toLowerCase().indexOf(event.target.value) > -1) {
        return item
      }

      return null
    })

    setFilteredItem(filtered);
  };

  useEffect(() => {
    setEventList(events);
  }, []);

  return (
    <div className="mainContainer">
      <SearchContainer>
        <Input
          value={search || ""}
          name="text"
          type="text"
          placeholder="Procure pelo nome do evento ou pela categoria"
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
        <EventList toggleModal={() => console.log("ok")}>
          {filteredItem.length > 0  ? filteredItem : eventList}
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
    </div>
  );
};
