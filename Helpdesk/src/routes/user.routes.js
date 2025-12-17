const express = require('express');
const { requireAuth, requireRole } = require("../middlewares/auth.middleware")
const userRouter = express.Router();

const userController = require('../controllers/user.controller');


userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userController.createUser);
userRouter.post('/id', userController.findUserByID);


userRouter.get('/profile', requireAuth, (req, res) => {res.json(req.user);})
userRouter.get('/support', requireAuth, requireRole('SUPPORT'), (req, res) => {res.json({ message: "Bienvenue dans la zone secrète support" })})


module.exports = userRouter;