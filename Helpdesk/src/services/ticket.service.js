const AppDataSource = require("../config/datasource")
const { ValidationError } = require('../errors/ApiError'); // pas encore utilisé


class TicketService {
    constructor(){
        this.ticketRepository = AppDataSource.getRepository("Ticket");
    }
    async findAll() {
        return await this.ticketRepository.find({relations: { user: true }})
    }

    async create(data) {

        const ticketData = {
            title: data.title,
            description:data.description,
            status:data?.status,
            priority:data?.priority,
            user: { id: data.user } 
        };        
        const newTicket = this.ticketRepository.create(ticketData)

        return await this.ticketRepository.save(newTicket)
    }

    async findById(id){
        return this.ticketRepository.findOne({
            where: { id },
            relations: ["user"]
        });
    }

}

module.exports = new TicketService();