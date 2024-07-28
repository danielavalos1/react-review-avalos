import { Input } from "../components/Input"
import { useState } from "react"
import { getPokemon } from "../services/pokeapi-service";
import { PokemonData } from '../components/PokemonData';
import PropTypes from 'prop-types'
import { css } from "@emotion/css";
import { colors } from "../styles";

const buttonStyles = css`
  border-radius:1rem;
  padding: 0.5rem 1rem;
  background-color: ${colors.gray.medium};
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1rem;
  color: white;
  border: transparent;
  cursor: pointer;
`

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

  return (
    <div style={{
      flex: 1,
      paddingTop: '2rem',
    }}>
      <form style={{
        display: 'flex',
        gap: '0.5rem'
      }} onSubmit={handleSubmit}>
        <Input
          name={'query'}
          placeholder={'pokemon name'}
          value={query}
          onChange={e => setQuery(e.target.value)}
          isRequired
        />
        <button className={buttonStyles}>Search</button>
      </form>

      {status === 'pending' && 'Loading...'}
      {status === "idle" && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '4rem'
        }}>
          <img src="/src/assets/Silhouette.svg" />
          <span style={{
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1rem'
          }}>Ready to search</span>
        </div>
      )}
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