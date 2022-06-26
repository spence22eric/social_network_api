const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser)


router.route('/:id')
    .get(getSingleUser)

module.exports = router;