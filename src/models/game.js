const conn = require('../database/connection');

const create = async (gameObj) => {
  const { name } = gameObj
  const query = 'INSERT INTO InfoGames.games (gam_name) VALUES (?);';
  const [game] = await conn.execute(query, [name]);
  return ({ id: game.insertId, name });
};

const getAll = async () => {
  const query = 'SELECT gam_id AS id, gam_name AS name FROM InfoGames.games;';
  const [game] = await conn.execute(query);
  return game;
};

const getById = async (id) => {
  const query = 'SELECT gam_id AS id, gam_name AS name FROM InfoGames.games WHERE gam_id = ?;';
  const [[game]] = await conn.execute(query, [id]);
  return game;
};

const update = async (id, gameObj) => {
  const { name } = gameObj
  const query = 'UPDATE InfoGames.games SET gam_name = ? WHERE gam_id = ?;';
  return conn.execute(query, [name, id]);
}

const drop = async (id) => {
  const query = 'DELETE FROM InfoGames.games WHERE gam_id = ?';
  return conn.execute(query, [id]);
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  drop,
};
