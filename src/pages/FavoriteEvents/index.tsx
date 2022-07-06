import { useState, useEffect } from "react";
import { Button } from "components/Button/Button";
import { Container, FavoriteList } from "./styles";
import { useEventContext } from "context/EventContext";
import Spinner from "components/Spinner/Spinner";

export function FavoriteEvents() {
  const { eventsList, getEventList } = useEventContext();

  const [favorites, setFavorites] = useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favorites-events", JSON.stringify(items));
  };

  function handleFavorite(id: number) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
    saveToLocalStorage(newFavorites);
  }

  useEffect(() => {
    setFavorites(eventsList);
  }, [eventsList]);

  useEffect(() => {
    getEventList();
  }, [getEventList]);

  useEffect(() => {
    const eventsFavourites = JSON.parse(
      localStorage.getItem("favorites-events")
    );

    if (eventsFavourites) {
      setFavorites(eventsFavourites);
    }
  }, []);

  if (eventsList.length > 0) {
    return (
      <Container className="mainContainer">
        <h1>Lista de eventos</h1>
        <ul>
          {favorites.map((item, index) => (
            <li key={index}>
              {item.title}
              <Button
                onClick={() => {
                  handleFavorite(item.id);
                }}
              >
                {item.favorite ? "Remover" : "Adicionar"}
              </Button>
            </li>
          ))}
        </ul>

        <h1>Eventos Favoritos</h1>
        <ul>
          {favorites.map((item) =>
            item.favorite && (
              <FavoriteList key={item.id}>{item.title}</FavoriteList>
            )
          )}
        </ul>
      </Container>
    );
  } else {
    return (
      <div className="mainContainer">
        <Spinner />
      </div>
    );
  }
}
