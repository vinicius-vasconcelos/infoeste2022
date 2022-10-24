const userService = require('../services/user');

const getAll = async (_req, res, _next) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

module.exports = {
  getAll,
};
