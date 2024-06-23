const express = require('express');
const morgan = require('morgan');

const exerciseRouter = require('./routes/exerciseRoutes');
const userRouter = require('./routes/userRoutes');
const mesocycleRouter = require('./routes/mesocycleRoutes');

const app = express();

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/exercises', exerciseRouter);
app.use('/api/users', userRouter);
app.use('/api/mesocycles', mesocycleRouter);

module.exports = app;