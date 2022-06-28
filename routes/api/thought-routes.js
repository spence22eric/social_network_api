const router = require('express').Router();
const {
    getAllThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought)

// /api/thoughts/:id
router.route('/:id')
    .get(getSingleThought)
    .delete(deleteThought)
    .put(updateThought)

module.exports = router;