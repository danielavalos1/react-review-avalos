import { useState } from "react"
import { Layout } from "./components/Layout"
import { Screen } from "./components/Screen"
import { SearchPage } from "./pages/SearchPage"
import { createFavorite, removeFavorite } from "./services/favorites-services"

export const AuthenticatedApp = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (pokemon) => {
    const data = {
      pokemon_name: pokemon.name,
      pokemon_id: pokemon.id,
      pokemon_type: pokemon.types[0].type.name,
      pokemon_avatar_url: pokemon.sprites.other['official-artwork'].front_default
    };
    createFavorite(data)
      .then(newFavorite => setFavorites([...favorites, newFavorite]))
      .catch(error => console.log(error));
  }

  const handleRemoveFavorite = (pokemon) => {
    const favorite = favorites.find(favorite => favorite.pokemon_name === pokemon.name);

    removeFavorite(favorite.id)
      .then(() => {
        const newFavorites = favorites.filter(pokeFavs => pokeFavs.pokemon_name !== pokemon.name);
        setFavorites(newFavorites);
      })
  }
  return (
    <Layout>
      <Screen>
        <SearchPage onAddFavorite={handleAddFavorite} onRemoveFavorite={handleRemoveFavorite} favorites={favorites} />
      </Screen>
    </Layout>
  )
}
