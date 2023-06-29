const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  members: [
    {
      // will be mongoose.Schema.Types.ObjectId
      // keep track of which users are in which room
      type: String,
      required: true,
    },
  ],
});

const Rooms = mongoose.model('Room', roomSchema);

module.exports = Rooms;
