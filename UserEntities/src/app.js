require("reflect-metadata")

require('dotenv').config();

const express = require('express');

// IMPORT ROUTES
const todoRoutes = require('./routes/todo.routes');
const userRoutes = require('./routes/user.routes');
const tagRoutes = require('./routes/tag.routes');

//MIDDLEWARES
const logger = require('./middlewares/logger.middleware');
//ERROR HANDLER
const errorHandler = require('./errors/errorHandler');

//APP
const app = express();

//DEBUT CODE
app.use(express.json());
app.use(logger);

//DEFINITION ROUTES
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tags', tagRoutes);

app.use(errorHandler);

module.exports = app;