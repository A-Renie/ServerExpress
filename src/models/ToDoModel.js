class TodoModel {
    static todos = [
        { id: 1, title: "Faire les courses", completed: false },
        { id: 2, title: "Congeler les saucisses", completed: true },
        { id: 3, title: "Organiser repas Noël", completed: false },
    ];
    static nextId = 1;

    static async findAll() {
        return this.todos;
    }

    static async create(title) {
        const newTodo = {
            id: this.nextId++,
            title: title,
            completed: false
        };

        this.todos.push(newTodo);
        return newTodo;
    }
}

module.exports = TodoModel;
