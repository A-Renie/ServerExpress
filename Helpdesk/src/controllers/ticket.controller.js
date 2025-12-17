const ticketService = require('../services/ticket.service');
const asyncHandler = require('../utils/asyncHandler');

const ticketController = {
    getAllTickets: asyncHandler(async (req, res) => {
        const tickets = await ticketService.findAll();
        res.status(200).json(tickets);
    }),

    createTicket: asyncHandler(async (req, res) => {
        const createdTicket = await ticketService.create(req.body);
        res.status(201).json(createdTicket);
    }),

    findTicketByID: asyncHandler(async (req, res) => {
        const foundTicket = await ticketService.findById(req.body);
        res.status(201).json(foundTicket);
    })
};

module.exports = ticketController;