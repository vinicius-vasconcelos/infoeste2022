const route = require('express').Router();
const userCtr = require('../controllers/user');
const { userValidation } = require('../middleware/fieldValidation');

route.post(
  '/',
  userValidation,
  userCtr.create,
);
route.get(
  '/',
  userCtr.getAll,
);
route.get(
  '/:id',
  userCtr.getById,
);

module.exports = route;
