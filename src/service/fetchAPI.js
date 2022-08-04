export const getPokemon = async (id) => {
  const req = await fetch(`https://pokeapi.glitch.me/v1/pokemon/:${id}`);
  const reqJson = await req.json();
  return reqJson.sprite
};

