const express = require('express');
const todoRouter = express.Router();

const todoController = require('../controllers/todo.controller');
// pareil avec le controller de User


todoRouter.get('/', todoController.getAllTodos);
todoRouter.post('/', todoController.createTodo);

// faire les routes get et post de Users



module.exports = todoRouter;