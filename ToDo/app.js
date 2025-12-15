const express = require('express');
const app = express();
const errorHandler = require('./src/errors/errorHandler');

const todoRoutes = require('./src/routes/ToDoRoutes');

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.use(errorHandler);

module.exports = app;
