const { Thought, User } = require('../models');

const thoughtController = {
    // Get all thoughts
    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find({})
                                          .select('-__v');
            res.json(thoughts);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Get a single thought by id
    getThoughtById: async (req, res) => {
        try {
            const thought = await Thought.findOne({ _id: req.params.id })
                                         .select('-__v');
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Create a new thought
    createThought: async (req, res) => {
        try {
            const thought = await Thought.create(req.body);
            await User.findByIdAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true, runValidators: true }
            );
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Update a thought by id
    updateThought: async (req, res) => {
        try {
            const thought = await Thought.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Delete a thought by id
    deleteThought: async (req, res) => {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.id });
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Add a reaction to a thought
    addReaction: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $push: { reactions: req.body } },
                { new: true, runValidators: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Delete a reaction from a thought
    deleteReaction: async (req, res) => {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought found with this id!' });
            }
            res.json(thought);
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = thoughtController;