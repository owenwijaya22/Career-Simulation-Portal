import { Schema, model } from 'mongoose';

const roomSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    npc: {
      type: Schema.Types.ObjectId,
      ref: 'NPC',
      required: true,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
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
