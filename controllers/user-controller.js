const { User } = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find()
        .select('-__v')
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.statu(500).json(err);
        })
    }
}

module.exports = userController;