const express = require('express');
const userRouter = require('./routes/userRoutes');
const error = require('./middleware/error');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use(error);

module.exports = app;
