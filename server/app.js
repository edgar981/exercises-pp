const express = require('express');

const apiRouter = require('./routes/apiRoutes');

const app = express();

app.use('/api', apiRouter);

module.exports = app;