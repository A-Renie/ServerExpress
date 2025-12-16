const tagService = require('../services/tag.service');
const asyncHandler = require('../utils/asyncHandler');

const tagController = {
    getAllTags: asyncHandler(async (req, res) => {
        const tags = await tagService.findAll();
        res.status(200).json(tags);
    }),

    createTag: asyncHandler(async (req, res) => {
        const createdTag = await tagService.create(req.body);
        res.status(201).json(createdTag);
    }),

    findTagByID: asyncHandler(async (req, res) => {
        const foundTag = await tagService.findById(req.body);
        res.status(201).json(foundTag);
    })
};

module.exports = tagController;