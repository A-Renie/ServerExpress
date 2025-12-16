const AppDataSource = require("../config/datasource")
const { ValidationError } = require('../errors/ApiError'); // pas encore utilisé


class UserService {
    constructor(){
        this.userRepository = AppDataSource.getRepository("User");
    }
    async findAll() {
        return await this.userRepository.find({relations: { todos: true }})
    }

    async create(data) {
        if (!data.name || data.name.trim() === "") {
            throw new ValidationError("Le nom est obligatoire");
        }
        const newUser = this.userRepository.create(data);
        return await this.userRepository.save(newUser)
    }

    async findById(data){
        const result = this.userRepository.findOneBy({ id: data.id })
        return result
    }

    //Creer find users with pending taks avec createquerybuilder
    // leftjoinandselect
    //where (status)
    //getMnay
}

module.exports = new UserService();