import { useEffect, useState } from "react"
import { Layout } from "./components/Layout"
import { Screen } from "./components/Screen"
import { SearchPage } from "./pages/SearchPage"
import { FavoritePage } from './pages/FavoritePage'
import { createFavorite, getFavorites, removeFavorite } from "./services/favorites-services";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuth } from "./hooks/useAuth"


export const AuthenticatedApp = () => {
  const [favorites, setFavorites] = useState([]);
  const { logout } = useAuth();
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

  useEffect(() => {
    getFavorites()
      .then(data => setFavorites(data));
  }, []);

  useEffect(() => {
    console.log(favorites)
  }, [favorites]);

  return (
    <Layout>
      <Screen>
        <button onClick={logout}>Log out</button>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <SearchPage
                  favorites={favorites}
                  onAddFavorite={handleAddFavorite}
                  onRemoveFavorite={handleRemoveFavorite}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavoritePage favorites={favorites} />
              }
            />
          </Routes>
        </BrowserRouter>
      </Screen>
    </Layout>
  )
}