
import { Input } from "../components/Input"
import { useEffect, useState } from "react"
import { getPokemon } from "../services/pokeapi-service";
import { PokemonData } from '../components/PokemonData';
import { createFavorite } from "../services/favorites-services";

export const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [state, setState] = useState({
    status: "idle", //success, error, pending
    data: null,
    error: null,
  });

  const { status, data: pokemon, error } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(query)
      .then(data => {
        setState({
          status: "success",
          data: data,
          error: null
        })
      })
      .catch(_error => {
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intenta de nuevo"
        })
      });
  }

  const handleAddFavorite = () => {
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

  const isFavorite = favorites.find(pokeFav => pokeFav.pokemon_name === pokemon?.name) ? true : false;

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={'query'}
          placeholder={'Pokemon Name'}
          value={query}
          onChange={e => setQuery(e.target.value)}
          isRequired
        />
        <button>Search</button>
      </form>
      {status === "idle" && "Ready to search"}
      {status === "success" && <PokemonData onAddFavorite={handleAddFavorite} pokemon={pokemon} isFavorite={isFavorite} />}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>

  )
}
