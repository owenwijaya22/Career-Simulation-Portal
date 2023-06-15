const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'A user must have an email'],
    unique: true,
    lowercase: true,

  },
  password: {
    type: String,
    minlength: [6, 'A password must be at least 6 characters long'],
    required: [true, 'A user must have a password'],
    select: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
