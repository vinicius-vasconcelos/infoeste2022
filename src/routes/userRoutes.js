const route = require('express').Router();
const userCtr = require('../controllers/user');

route.get('/', userCtr.getAll);
route.post('/', userCtr.create);

module.exports = route;
