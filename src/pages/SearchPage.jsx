
import { Input } from "../components/Input"
import { useState } from "react"
import { getPokemon } from "../services/pokeapi-service";
import { PokemonData } from '../components/PokemonData';

export const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon(query)
      .then(data => setPokemon(data))
      .catch(error => console.log(error));
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          name={'query'}
          placeholder={'Pokemon Name'}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button>Search</button>
      </form>
      {
        pokemon ? <PokemonData pokemon={pokemon} /> : 'Ready to search'
      }
    </div>

  )
}
