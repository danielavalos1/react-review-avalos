import PropTypes from 'prop-types'
import { colors, typography } from '../styles';
import styled from '@emotion/styled';
import { RiStarFill } from 'react-icons/ri';
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { FaWeightScale } from "react-icons/fa6";
import { Stat } from './Stat';

const colorTypes = {
  unknown: "#666666",
  normal: "#AAA67F",
  fighting: "#C12239",
  flying: "#A891EC",
  ground: "#DEC16B",
  poison: "#A43E9E",
  rock: "#B69E31",
  bug: "#A7B723",
  ghost: "#70559B",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  electric: "#F9CF30",
  psychic: "#FB5584",
  ice: "#9AD6DF",
  dragon: "#7037FF",
  dark: "#75574C",
  fairy: "#E69EAC",
}

const formatId = (id) => {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}

const PokeImage = styled.img`
  max-width: 9rem;
  width: 9rem;
`

const Span = styled.span`
  font-weight:400;
  font-size:10px;
  line-height:1rem;
  text-align: justify;
  color: ${colors.gray.dark}
`

const FavoriteButton = styled.button`
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:700;
  font-size:14px;
  line-height:1rem;
  gap:10px;
  background-color: ${colors.gray.medium};
  border:none;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  font-family: ${typography.text};
  color: white;
  cursor: pointer;
  transition-property: transform, color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    transform: scale(1.05);
  }
`

export const PokemonData = ({ pokemon, onAddFavorite, isFavorite = false, onRemoveFavorite }) => {

  const regularContent = (
    <>
      <RiStarFill size={16} color={colors.gray.light} /> Mark as favorite
    </>
  )

  const favoriteContent = (
    <>
      <RiStarFill size={16} color={colors.yellow[500]} /> Remove Favorite
    </>
  )

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '4rem',
      gap: '1rem'
    }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <h2 style={{
          textTransform: 'capitalize',
          fontWeight: 700,
          fontSize: '1.5rem',
          lineHeight: '2rem',
          color: colors.gray.dark
        }}>{pokemon.name}</h2>
        <p style={{
          textTransform: 'capitalize',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '1rem',
          textAlign: 'center',
          color: colors.gray.dark
        }}>{formatId(pokemon.id)}</p>
      </div>
      <PokeImage
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
      />
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'space-between'
      }}>
        {
          pokemon.types.map(type => (
            <p style={{
              backgroundColor: colorTypes[type.type.name],
              color: 'white',
              padding: '2px 8px',
              borderRadius: '10px',
              fontWeight: 700,
              fontSize: '10px',
              lineHeight: '1rem'
            }} key={type.slot}>{type.type.name}</p>
          ))
        }
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <Stat stat={'Weight'}>
          <FaWeightScale size={16} />
          <Span>{pokemon.weight / 10} kg</Span>
        </Stat>
        <hr style={{
          height: '3rem',
          border: `1px solid ${colors.gray.light}`
        }} />
        <Stat stat={'Height'}>
          <LiaRulerVerticalSolid size={16} />
          <Span>{pokemon.height / 10} m</Span>
        </Stat>
      </div>
      <FavoriteButton onClick={() => isFavorite ? onRemoveFavorite(pokemon) : onAddFavorite(pokemon)}>
        {isFavorite ? favoriteContent : regularContent}
      </FavoriteButton>
    </div>
  )
}

PokemonData.propTypes = {
  pokemon: PropTypes.object.isRequired,
  onAddFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  onRemoveFavorite: PropTypes.func.isRequired,
}