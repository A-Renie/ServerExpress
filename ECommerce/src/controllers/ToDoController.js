// const TodoService = require('../services/ToDoService');

// exports.getAllTodos = async (req, res) => {
//     const todos = await TodoService.getAllTodos();
//     res.json(todos);
// };

// exports.createTodo = async (req, res) => {
//     const title = req.body;

//     const todo = await TodoService.createTodo(title);

//     if (!todo) {
//         return res.status(400).json({ error: 'Le titre est obligatoire' });
//     }

//     res.status(201).json(todo);
// };
