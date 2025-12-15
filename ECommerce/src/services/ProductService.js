const ProductModel = require('../models/ProductModel');
const { ValidationError, NotFoundError } = require('../errors/ApiError');

class ProductService {

    static async getAllProducts() {
        return ProductModel.findAll();
    }

    static async createTodo(title) {
        if (!title || title.title.trim() === '') {
            throw new ValidationError("Le message ne peut pas etre vide");
        }

        return TodoModel.create(title);
    }
}

module.exports = ProductService;
