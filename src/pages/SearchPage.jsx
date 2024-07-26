
import { Input } from "../components/Input"
import { useState } from "react"
import { getPokemon } from "../services/pokeapi-service";
import { PokemonData } from '../components/PokemonData';

export const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(query)
      .then(data => {
        console.log(data);
        setPokemon(data);
        setError(null);
      })
      .catch(error => {
        console.log(error);
        setError("El pokemon no existe! Intenta de nuevo");
        setPokemon(null);
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
      {!pokemon && !error && "Ready to search"}
      {pokemon && <PokemonData pokemon={pokemon} />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>

  )
}
