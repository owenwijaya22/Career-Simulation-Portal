import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
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

const Rooms = model('Room', roomSchema);

export default Rooms;
