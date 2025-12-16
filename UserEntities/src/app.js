require("reflect-metadata")

require('dotenv').config();

const express = require('express');

// ROUTES
const todoRoutes = require('./routes/todo.routes');
const userRoutes = require('./routes/user.routes');

//MIDDLEWARES
const logger = require('./middlewares/logger.middleware');
//ERROR HANDLER
const errorHandler = require('./errors/errorHandler');

//APP
const app = express();

//DEBUT CODE
app.use(express.json());
app.use(logger);

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

module.exports = app;