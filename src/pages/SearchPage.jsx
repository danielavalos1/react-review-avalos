
import { Input } from "../components/Input"
import { useState } from "react"
import { getPokemon } from "../services/pokeapi-service";
import { PokemonData } from '../components/PokemonData';

export const SearchPage = () => {
  const [query, setQuery] = useState('');
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
      {status === "success" && <PokemonData pokemon={pokemon} />}
      {status === "error" && <p style={{ color: "red" }}>{error}</p>}
    </div>

  )
}
