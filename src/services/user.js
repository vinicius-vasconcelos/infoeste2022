const user = require('../models/user');

const getAll = async () => {
  const users = user.getAll();
  return users;
}

const create = async (name) => {
  if(!name) return 'Name required';
  const createdUser = user.create(name);
  return createdUser;
}

module.exports = {
  getAll,
  create,
};
