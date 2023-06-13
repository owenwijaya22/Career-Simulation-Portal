const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,   
    required: [true, 'A user must have a username'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
