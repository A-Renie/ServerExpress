const { DataSource } = require("typeorm");
const UserSchema = require("../models/user.entity");
const TicketSchema = require("../models/ticket.entity");
const TagSchema = require("../models/tag.entity");

const AppDataSource = new DataSource({
    type: "sqlite",
    host: 'localhost',
    port: 1433,
    username: "root",
    password: "your_password",
    database: "database.sqlite",
    synchronize: true,
    logging: true,
    entities: [
        UserSchema,
        TicketSchema,
        TagSchema
    ],
}); 


module.exports = AppDataSource