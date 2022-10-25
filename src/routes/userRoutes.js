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
route.put(
  '/:id',
  userValidation,
  userCtr.update,
);
route.delete(
  '/:id',
  userCtr.drop,
);

module.exports = route;
