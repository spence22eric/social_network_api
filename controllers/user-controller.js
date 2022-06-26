const { User } = require('../models/')

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
                res.status(500).json(err);
            })
    },
    getSingleUser({ params }, res) {
        User.findOne({ _id: params.id})
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(400).json({ message: 'No user with that id' })
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
    },
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => {
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    }

}

module.exports = userController;