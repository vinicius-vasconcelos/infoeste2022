const user = require('../models/user');

const getAll = async () => {
  const users = user.getAll();
  return users;
}

module.exports = {
  getAll,
};
