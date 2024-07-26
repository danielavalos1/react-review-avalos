import { Input } from "../components/Input"
import { useEffect, useState } from "react"
import { getPokemon } from "../services/pokeapi-service";
import { PokemonData } from '../components/PokemonData';
import PropTypes from 'prop-types'

export const SearchPage = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const [query, setQuery] = useState('');
  const [state, setState] = useState({
    status: "idle", //success, error, pending
    data: null,
    error: null,
  });

  const { status, data: pokemon, error } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ status: "pending", data: null, error: null });
    getPokemon(query)
      .then(data => {
        setState({
          status: "success",
          data: data,
          error: null
        })
      })
      .catch(() => {
        setState({
          status: "error",
          data: null,
          error: "El pokemon no existe! Intenta de nuevo"
        })
      });
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
      {status === 'pending' && 'Loading...'}
      {status === "idle" && "Ready to search"}
      {status === "success" && <PokemonData onAddFavorite={onAddFavorite} pokemon={pokemon} isFavorite={isFavorite} onRemoveFavorite={onRemoveFavorite} />}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>

  )
}

SearchPage.propTypes = {
  favorites: PropTypes.array.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  onRemoveFavorite: PropTypes.func.isRequired,
}