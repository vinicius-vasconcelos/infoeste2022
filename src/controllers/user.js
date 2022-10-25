const userService = require('../services/user');

const create = async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await userService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const drop = async (req, res, next) => {
  try {
    await userService.drop(req.params.id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  drop,
};
