const express = require('express');
const app = express();

const todoRoutes = require('./src/routes/ToDoRoutes');

app.use(express.json());

app.use('/api/todos', todoRoutes);

module.exports = app;
