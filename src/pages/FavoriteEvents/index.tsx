import { useState, useEffect } from "react";
import { events } from "pages/Events/constants";
import { Button } from "components/Button/Button";

export function FavoriteEvents() {
  const [favorites, setFavorites] = useState([]);

  function handleFavorite(id: number) {
    const newFavorites = favorites.map((item) => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  useEffect(() => {
    setFavorites(events);
  }, []);

  return (
    <>
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
          item.favorite ? <li key={item.id}>{item.title}</li> : null
        )}
      </ul>
    </>
  );
}
