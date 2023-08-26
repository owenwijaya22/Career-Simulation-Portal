import { Schema, model } from 'mongoose';

const AttemptChatSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  npcId: {
    type: Schema.Types.ObjectId,
    ref: 'NPC',
    required: false,
  },
  sendToClient: {
    type: Schema.Types.Boolean,
    required: false,
  },
  locked: {
    type: Schema.Types.Boolean,
    required: false,
  },
});

export default AttemptChatSchema;
