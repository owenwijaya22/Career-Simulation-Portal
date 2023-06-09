const mongoose = require('mongoose');

const messageModel = mongoose.Schema({
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
    required: [true, 'A message must have a content'],
  },
  timestamp: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  roomId: {
    type: String,
    ref: 'ChatRoom',
    required: [true, 'A message must have a chat room'],
  },
});

const Message = mongoose.model('Message', messageModel);

module.exports = Message;
