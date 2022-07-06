import { useState, useEffect } from "react";
import { Button } from "components/Button/Button";
import { Container, FavoritList, NotFoundEvent } from "./styles";
import { useEventContext } from "context/EventContext";

export function FavoriteEvents() {
  const { eventsList, getEventList } = useEventContext();

  const [favorites, setFavorites] = useState([]);

  function handleFavorite(id: number) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  useEffect(() => {
    setFavorites(eventsList);
  }, [eventsList]);

  useEffect(() => {
    getEventList();
  }, [getEventList]);

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
            item.favorite ? (
              <FavoritList key={item.id}>{item.title}</FavoritList>
            ) : null
          )}
        </ul>
      </Container>
    );
  } else {
    return (
      <NotFoundEvent className="mainContainer">
        Não há eventos favoritados no momento.
      </NotFoundEvent>
    );
  }
}
