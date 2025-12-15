const TodoModel = require('../models/ToDoModel');

class TodoService {

    static async getAllTodos() {
        return TodoModel.findAll();
    }

    static async createTodo(title) {
        if (!title) {
            return null;
        }

        return TodoModel.create(title);
    }
}

module.exports = TodoService;
