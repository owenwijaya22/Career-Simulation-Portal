import { Schema, model } from 'mongoose';

const messageSchema = new Schema(
  {
    message: {
      type: String,
      trim: true,
      required: [true, 'A message must have content'],
    },
    roomId: {
      type: Schema.Types.ObjectId,
      ref: 'Room',
      required: [true, 'A message must belong to a chat room'],
    },
    senderType: {
      type: String,
      enum: ['USER', 'NPC'],
    },
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model('Message', messageSchema);

export default Message;
