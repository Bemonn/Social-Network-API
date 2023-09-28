// Importing mongoose library
const mongoose = require('mongoose');

// Defining user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  thoughts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

// Adds virtual property friendCount to schema to compute length of friends array
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Creating the User model using mongoose.model
const User = mongoose.model('User', userSchema);

// Exporting User model
module.exports = User;