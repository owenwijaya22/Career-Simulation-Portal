const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      trim: true,
      required: [true, 'A message must have content'],
    },
    response: {
      type: String,
      trim: true,
      required: [true, 'A message must have a reply'],
    },
    // will be mongoose.Schema.Types.ObjectId
    roomId: {
      type: String,
      ref: 'Room',
      required: [true, 'A message must belong to a chat room'],
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
