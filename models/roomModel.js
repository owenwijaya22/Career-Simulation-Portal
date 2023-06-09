const roomSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  chatName: {
    type: String,
    required: true
  },
  latestMessage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  prompt: {
    type: String,
    required: true
  },
  members: [{
    // keep track of which users are in which room
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Room', roomSchema);