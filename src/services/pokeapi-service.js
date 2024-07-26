const BASE_URI = "https://pokeapi.co/api/v2/pokemon";

export const getPokemon = async (query) => {
  const response = await fetch(`${BASE_URI}/${query}`);
  const data = await response.json();
  return data;
}