const AppDataSource = require("../config/datasource")
const { ValidationError } = require('../errors/ApiError'); // pas encore utilisé


class TagService {
    constructor(){
        this.tagRepository = AppDataSource.getRepository("Tag");
    }
    async findAll() {
        return await this.tagRepository.find()
    }

    async create(data) {
        // if (!data.name || data.name.trim() === "") {
        //     throw new ValidationError("Le nom est obligatoire"); //ajuste les erreurs par rapport au body de data
        // }
        const newTag = this.tagRepository.create(data);
        return await this.tagRepository.save(newTag)

    }

    async findById(data){
        const result = this.tagRepository.findOneBy({ id: data.id })
        return result
    }

    async findByIds(data){ // a finir
        const result = this.tagRepository.findManyBy({ id: data.id })
        return result
    }

}

module.exports = new TagService();