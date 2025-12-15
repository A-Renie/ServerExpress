const TodoModel = require('../models/ToDoModel');
const { ValidationError, NotFoundError } = require('../errors/ApiError');

class TodoService {

    static async getAllTodos() {
        return TodoModel.findAll();
    }

    static async createTodo(title) {
        if (!title || title.title.trim() === '') {
            throw new ValidationError("Le message ne peut pas etre vide");
        }

        return TodoModel.create(title);
    }
}

module.exports = TodoService;
