const array = [
  'Vinicius',
  'Fabison',
  'Angélica'
];

const getAll = async () => {
  return array;
};

const create = async (name) => {
  array.push(name);

  return ({
    name,
    id: array.length,
  })
};

module.exports = {
  getAll,
  create
};
