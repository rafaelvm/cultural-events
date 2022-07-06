import { Input } from "components/Input";
import { DetailsModal } from "components/Modal";
import { useEffect, useState } from "react";
import { EventList } from "./components/EventList/EventList";
import { DetailsWrapper, InfoWrapper, SearchContainer } from "./styles";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import Select from "components/Select/Select";
import { useEventContext } from "context/EventContext";
import Spinner from "components/Spinner/Spinner";

export const Events: React.FC = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [eventList, setEventList] = useState([]);
  const [search, setNewSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const [details, setDetails] = useState("");

  const { eventsList, getEventList } = useEventContext();

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen((prevState) => !prevState);
  };

  const toogleDetails = (value: string) => {
    setDetails(value);
    toggleDetailsModal();
  };

  const filteredEvents = eventsList.reduce((acc, current) => {
    const filter = acc.find((item) => item.category === current.category);
    if (!filter) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  const handleCategoryChange = (event) => {
    const filteredCategory = eventList.filter((item) => {
      if (item.category.toLowerCase().indexOf(event.target.value) > -1) {
        return item;
      }
      return null;
    });

    setFilteredItem(filteredCategory);
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);

    const filtered = eventList.filter((item) => {
      if (item.title.toLowerCase().indexOf(event.target.value) > -1) {
        return item;
      }
      if (item.category.toLowerCase().indexOf(event.target.value) > -1) {
        return item;
      }

      return null;
    });

    setFilteredItem(filtered);
  };

  useEffect(() => {
    setEventList(eventsList);
  }, [eventsList]);

  useEffect(() => {
    getEventList();
  }, [getEventList]);

  if (eventList.length > 0) {
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
            <Select typeLabel="categoria" onChange={handleCategoryChange}>
              {filteredEvents}
            </Select>
          </InfoWrapper>
        </SearchContainer>

        <EventList onClick={toogleDetails}>
          {filteredItem.length > 0 ? filteredItem : eventList}
        </EventList>

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
  } else {
    return (
      <div className="mainContainer">
        <Spinner />;
      </div>
    );
  }
};
