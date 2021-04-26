const get = () => fetch('https://pokeapi.co/api/v2/pokemon/ditto');

const getAsync = () => {
  const data = { fullName: 'JH', age: 27 };
  return data;
};

module.exports = {
  get,
  getAsync,
};
