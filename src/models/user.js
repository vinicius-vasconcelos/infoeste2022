const conn = require('../database/connection');

const create = async (userObj) => {
  const { fullName, nickname } = userObj;
  const query = 'INSERT INTO InfoGames.users (usr_full_name, usr_nickname) VALUES (?, ?);';
  const [user] = await conn.execute(query, [fullName, nickname]);
  return ({
    id: user.insertId,
    fullName,
    nickname,
  });
};

const getAll = async () => {
  const query = 'SELECT usr_id AS id, usr_full_name AS fullName, usr_nickname AS nickname FROM InfoGames.users;';
  const [user] = await conn.execute(query);
  return user;
};

const getById = async (id) => {
  const query = 'SELECT usr_id AS id, usr_full_name AS fullName, usr_nickname AS nickname FROM InfoGames.users WHERE usr_id = ?;';
  const [[user]] = await conn.execute(query, [id]);
  return user;
};

module.exports = {
  create,
  getAll,
  getById,
};
