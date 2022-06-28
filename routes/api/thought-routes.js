const router = require('express').Router();
const { getAllThoughts } = require('../../controllers/thought-controller');


router.route('/')
.get(getAllThoughts)

module.exports = router;