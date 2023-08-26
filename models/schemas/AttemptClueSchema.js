import { Schema, model } from 'mongoose';

const AttemptClueSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  clueId: {
    type: Schema.Types.ObjectId,
    ref: 'Clue',
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
  alert: {
    type: Schema.Types.Boolean,
    required: false,
  },
});

export default AttemptClueSchema;
