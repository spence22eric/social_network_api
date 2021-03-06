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
    // get single user
    getSingleUser({ params }, res) {
        User.findOne({ _id: params.id })
            .select('-__v')
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with that id' })
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    },
    // create user
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => {
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            });
    },
    // Update user
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' })
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(500).json(err));
    },
    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json({
                    data: dbUserData,
                    message: 'User deleted'
                })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err);
            })
    },
    // add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $addToSet: { friends: params.friendId } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err)
                res.status(500).json(err)
            });
    },
    // remove friend
    removeFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, { $pull: { friends: params.friendId } }, { new: true })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user with this id' });
                    return;
                }
                res.json({
                    data: dbUserData,
                    message: 'Friend removed'
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
    }
}

module.exports = userController;