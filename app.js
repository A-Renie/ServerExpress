const express = require('express');
const app = express();

const todoRoutes = require('./src/routes/ToDoRoutes');
// const errorHandler = require('./src/middlewares/errorHandler');

app.use(express.json());

app.use('/api/todos', todoRoutes);

// middleware d'erreur TOUJOURS en dernier
// app.use(errorHandler);

module.exports = app;
