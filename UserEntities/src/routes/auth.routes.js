const express = require('express');
const passport = require("passport")
const authRouter = express.Router();

const authController = require('../controllers/auth.controller');


authRouter.post('/register', authController.register);
authRouter.post('/login', passport.authenticate('local', { session: false }), authController.login)
authRouter.post('/refresh', authController.refresh);


module.exports = authRouter;