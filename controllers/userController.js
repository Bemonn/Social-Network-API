const { User } = require('../models');

const userController = {
    // Get all users
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({})
                                    .populate({
                                        path: 'thoughts',
                                        select: '-__v'
                                    })
                                    .select('-__v');
            res.json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
    // Get a user by id
    getUserById: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.params.id })
                                   .populate({
                                       path: 'thoughts',
                                       select: '-__v'
                                   })
                                   .select('-__v');
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Create a new user
    createUser: async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Update a user by id
    updateUser: async (req, res) => {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Delete a user by id
    deleteUser: async (req, res) => {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Add a friend to a user's friend list
    addFriend: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                { $addToSet: { friends: req.params.friendId } },
                { new: true, runValidators: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Delete a friend from a user's friend list
    deleteFriend: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.id,
                { $pull: { friends: req.params.friendId } },
                { new: true, runValidators: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found with this id!' });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = userController;