const express = require('express');
const userRouter = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');
const error = require('./middleware/error');

const app = express();

app.use(express.json());
app.use('/user', userRouter);
app.use('/game', gameRoutes);
app.use(error);

module.exports = app;
