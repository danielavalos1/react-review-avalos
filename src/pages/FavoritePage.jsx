import styled from '@emotion/styled';
import PropTypes from 'prop-types'
import { RiStarFill } from 'react-icons/ri';
import { colors } from '../styles';

const typeColors = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#A8A878",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};
const formatId = (id) => {
  id = String(id);
  return id.length < 2 ? `#00${id}` : id.length < 3 ? `#0${id}` : `#${id}`;
}
const PokeCard = styled('div')`
  border: 1px solid ${({ type }) => typeColors[type]};
  width:6.5rem;
  border-radius: 0.5rem;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Favorites = styled('div')`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

const Wrapper = styled('div')`
  display:flex;
  flex:1;
  flex-direction: column;
  gap:1rem;
  overflow-y:auto;
`

export const FavoritePage = ({ favorites }) => {
  return (
    <Wrapper>
      <h3 style={{
        fontWeight: 700,
        fontSize: '1.5rem',
        lineHeight: '2rem',
        textAlign: 'center',
        marginTop: '22px'
      }}>Favorites</h3>
      <Favorites>
        {
          favorites.map(pokeFav => (
            <PokeCard type={pokeFav.pokemon_type} key={pokeFav.id}>
              <header style={{
                display: 'flex',
                width: '100%',
                padding: '0.25rem 0.5rem',
                justifyContent: 'space-between'
              }}>
                <RiStarFill color={colors.yellow[500]} />
                <span style={{
                  fontWeight: 400,
                  fontSize: '0.5rem',
                  lineHeight: '0.75rem',
                  color: typeColors[pokeFav.pokemon_type],
                }}>{formatId(pokeFav.pokemon_id)}</span>
              </header>
              <img width={72} height={72} src={pokeFav.pokemon_avatar_url} alt={pokeFav.pokemon_name} />
              <footer style={{
                padding: '0.25rem 0.5rem',
                backgroundColor: typeColors[pokeFav.pokemon_type],
                width: '100%',
                textAlign: 'center',
                borderBottomRightRadius: '0.3rem',
                borderBottomLeftRadius: '0.3rem',
                color: 'white',
                fontWeight: 400,
                fontSize: '10px',
                lineHeight: '1rem',
                textTransform: 'capitalize'
              }}>{pokeFav.pokemon_name}</footer>
            </PokeCard>
          ))
        }
      </Favorites>
    </Wrapper>
  )
}

FavoritePage.propTypes = {
  favorites: PropTypes.array.isRequired
}