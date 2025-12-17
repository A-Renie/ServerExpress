const express = require('express');
const ticketRouter = express.Router();

const ticketController = require('../controllers/ticket.controller');


ticketRouter.get('/', ticketController.getAllTickets);
ticketRouter.post('/', ticketController.createTicket);
ticketRouter.post('/id', ticketController.findTicketByID);


module.exports = ticketRouter;