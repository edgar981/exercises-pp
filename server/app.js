const express = require('express');
const morgan = require('morgan');

const exerciseRouter = require('./routes/exerciseRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/exercises', exerciseRouter);
app.use('/api/users', userRouter);

module.exports = app;