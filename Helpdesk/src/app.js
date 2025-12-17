require("reflect-metadata")

require('dotenv').config();

const express = require('express');
const passport = require("passport")
require('./config/passport')(passport)
const cors = require ("cors") //pas encore utilisé
const helmet = require ("helmet") // pas encore utilisé 

// cors helmet passport / 

// IMPORT ROUTES
const ticketRoutes = require('./routes/ticket.routes');
const userRoutes = require('./routes/user.routes');
const tagRoutes = require('./routes/tag.routes');
const authRoutes = require ('./routes/auth.routes')

//MIDDLEWARES
const logger = require('./middlewares/logger.middleware');
//ERROR HANDLER
const errorHandler = require('./errors/errorHandler');

//APP
const app = express();

//DEBUT CODE
app.use(helmet())
app.use(cors())
app.use(express.json());
app.use(passport.initialize())
app.use(logger);

//DEFINITION ROUTES
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/auth', authRoutes);

app.use(errorHandler);

module.exports = app;