const { DataSource } = require("typeorm");
const UserSchema = require("../models/user.entity");

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
        // require("../models/todo.entity")  // a jouter plus tard
    ],
}); 


module.exports = AppDataSource