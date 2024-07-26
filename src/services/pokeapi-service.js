const BASE_URI = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (query) => {
  return fetch(`${BASE_URI}/${query}`)
    .then(response => response.json());
}