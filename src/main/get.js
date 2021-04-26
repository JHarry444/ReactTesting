const get = () => fetch('https://pokeapi.co/api/v2/pokemon/ditto');

const getAsync = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const json = await res.json();
    return json;
  } catch (error) {
    return error;
  }
};

module.exports = {
  get,
  getAsync,
};
