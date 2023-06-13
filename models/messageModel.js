const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  to: {
    type: String,
    trim: true,
    required: [true, 'A message must have a recipient'],
  },
  from: {
    type: String,
    trim: true,
    required: [true, 'A message must have a sender'],
  },
  message: {
    type: String,
    trim: true,
    required: [true, 'A message must have content'],
  },
  // will be mongoose.Schema.Types.ObjectId
  roomId: {
    type: String,
    ref: 'Room',
    required: [true, 'A message must belong to a chat room'],
  },
}, {
  timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
