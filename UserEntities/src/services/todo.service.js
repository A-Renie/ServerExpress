const AppDataSource = require("../config/datasource")
const { ValidationError } = require('../errors/ApiError'); // pas encore utilisé


class TodoService {
    constructor(){
        this.todoRepository = AppDataSource.getRepository("Todo");
    }
    async findAll() {
        return await this.todoRepository.find({relations: { user: true }})
    }

    async create(data) {
        // if (!data.name || data.name.trim() === "") {
        //     throw new ValidationError("Le nom est obligatoire"); //ajuste les erreurs par rapport au body de data
        // }
        const todoData = {
            name: data.name,
            taskDescription:data.taskDescription,
            user: { id: data.user } 
        };        
        const newTodo = this.todoRepository.create(todoData)
        // newTodo.user = data.user; // ancienne version plus utilisé

        return await this.todoRepository.save(newTodo)
    }

    async findById(id){
        return this.todoRepository.findOne({
            where: { id },
            relations: ["user"]
        });
    }

}

module.exports = new TodoService();