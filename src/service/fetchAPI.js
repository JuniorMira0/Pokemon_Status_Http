export const getPokemon = async (id) => {
  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const reqJson = await req.json();
  return reqJson
};

