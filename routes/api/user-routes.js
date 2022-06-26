const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    deleteUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

router.route('/:id')
    .get(getSingleUser)
    .delete(deleteUser)

module.exports = router;