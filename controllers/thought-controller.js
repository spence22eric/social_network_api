const { Thought, User } = require('../models/');


const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1 })
            .then(dbThoughtData => {
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            });
    },
    // create thought
    createThought({ body }, res) {
        Thought.create(body)
            .then(dbThoughtData => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(400).json({
                        message: 'Thought created, but no user found with specified id'
                    })
                }
                res.json({ message: 'Thought created' })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    }
}

module.exports = thoughtController;