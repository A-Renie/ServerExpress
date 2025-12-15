const express = require('express');
const router = express.Router();

const todoController = require('../controllers/ToDoController');
const asyncHandler = require('../middlewares/asyncHandler');

router.get('/', asyncHandler(todoController.getAllTodos));
router.post('/', asyncHandler(todoController.createTodo));

module.exports = router;
