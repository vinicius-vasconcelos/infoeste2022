const gameService = require('../services/game');

const create = async (req, res, next) => {
  try {
    const game = await gameService.create(req.body);
    return res.status(201).json(game);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const games = await gameService.getAll();
    return res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const game = await gameService.getById(req.params.id);
    return res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    await gameService.update(req.params.id, req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const drop = async (req, res, next) => {
  try {
    await gameService.drop(req.params.id);
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
