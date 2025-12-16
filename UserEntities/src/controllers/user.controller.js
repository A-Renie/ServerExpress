const userService = require('../services/user.service');
const asyncHandler = require('../utils/asyncHandler');

const userController = {
    getAllUsers: asyncHandler(async (req, res) => {
        const users = await userService.findAll();
        res.status(200).json(users);
    }),

    createUser: asyncHandler(async (req, res) => {
        const createdUser = await userService.create(req.body);
        res.status(201).json(createdUser);
    }),

    findUserByID: asyncHandler(async (req, res) => {
        const foundUser = await userService.findById(req.body);
        res.status(201).json(foundUser);
    })
};

module.exports = userController;