import PropTypes from 'prop-types'
import { colors, typography } from '../styles';
import styled from '@emotion/styled';
import { RiStarFill } from 'react-icons/ri';

const formatId = (id) => {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}

const PokeImage = styled.img`
  max-width: 9rem;
`

const FavoriteButton = styled.button`
  display:flex;
  align-items:center;
  justify-contente-center;
  gap:0.5rem;
  background-color: ${colors.gray.medium};
  border:none;
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;
  font-family: ${typography.text};
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition-property: transform, color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    transform: scale(1.05);
  }
`

export const PokemonData = ({ pokemon, onAddFavorite, isFavorite = false }) => {

  const regularContent = (
    <>
      <RiStarFill color={colors.gray.light} /> Mark as favorite
    </>
  )

  const favoriteContent = (
    <>
      <RiStarFill color={colors.yellow[500]} /> Remove Favorite
    </>
  )

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>{formatId(pokemon.id)}</p>
      <PokeImage
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      {
        pokemon.types.map(type => (
          <p key={type.slot}>{type.type.name}</p>
        ))
      }
      <p>Height: {pokemon.height / 10} m</p>
      <p>Weight: {pokemon.weight / 10} kg</p>
      <FavoriteButton onClick={onAddFavorite}>
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  )
}

PokemonData.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool
}