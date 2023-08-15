import { Schema, model } from 'mongoose';

const roomSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    npcId: {
      type: Schema.Types.ObjectId,
      ref: 'NPC',
      required: true,
    },
    lastMessage: {
      type: String,
      default: ''
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: 'Company',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rooms = model('Room', roomSchema);

export default Rooms;
