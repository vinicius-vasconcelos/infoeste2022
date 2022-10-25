const userService = require('../services/user');

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const create = async (req, res) => {
  const { name } = req.body;
  const user = await userService.create(name);
  return res.status(201).json(user);
};

module.exports = {
  getAll,
  create
};
