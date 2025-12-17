const authService = require('../services/auth.service');
const asyncHandler = require('../utils/asyncHandler');

const authController = {
    register: asyncHandler(async (req, res) => {
        const reg = await authService.register(req.body);
        res.status(201).json(reg);
    }),

    login: asyncHandler(async (req, res) => {
        const log = await authService.login(req.user);
        res.status(201).json(log);
    }),

    refresh: asyncHandler(async (req, res) => {
        const ref = await authService.refresh(req.body);
        res.status(201).json(ref);
    })
};

module.exports = authController;