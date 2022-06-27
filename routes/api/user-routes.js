const router = require('express').Router();
const {
    getAllUsers,
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router.route('/:id')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;