const mongoose = require('mongoose');

const roomModel = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'A room must have a name'],
  },
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

module.exports = mongoose.model('Room', roomModel);