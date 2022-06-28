const { Thought } = require('../models/');


const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: -1 })
            .then(dbThoughtData => {
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err)
            })
    }    
}

module.exports = thoughtController;