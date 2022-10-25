const game = require('../models/game');
const { isValidName } = require('../validations/validations');

const _validations = ({ name }) => {
  if(!isValidName(name)) throw new Error('Name errado! Deve conter entre 3 e 50 caracteres');
}

const create = async (gameObj) => {
  _validations(gameObj);
  return await game.create(gameObj);
};

const getAll = async () => game.getAll();

const getById = async (id) => {
  const gameFound = await game.getById(id);
  if (!gameFound) throw new Error('Jogo não encontrado');
  return gameFound;
};

const update = async (id, gameObj) => {
  _validations(gameObj);
  await getById(id);
  return game.update(id, gameObj);
};

const drop = async (id) => {
  await getById(id);
  return game.drop(id);
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  drop,
};
