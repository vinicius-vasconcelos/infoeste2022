const route = require('express').Router();
const userCtr = require('../controllers/user');

route.get('/', userCtr.getAll);

module.exports = route;
