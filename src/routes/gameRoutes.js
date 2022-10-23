const route = require('express').Router();
const gameCtr = require('../controllers/game');
const { gameValidation } = require('../middleware/fieldValidation');

route.post(
  '/',
  gameValidation,
  gameCtr.create,
);
route.get(
  '/',
  gameCtr.getAll,
);
route.get(
  '/:id',
  gameCtr.getById,
);
route.put(
  '/:id',
  gameValidation,
  gameCtr.update,
);
route.delete(
  '/:id',
  gameCtr.drop,
);

module.exports = route;
