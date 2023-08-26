import { Schema, model } from 'mongoose';

const AttemptOfficeSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: false,
  },
  visible: {
    type: Schema.Types.Boolean,
    required: false,
  },
  alert: {
    type: Schema.Types.Boolean,
    required: false,
  },
  ping: {
    type: Schema.Types.Boolean,
    required: false,
  },
  active: {
    type: Schema.Types.Boolean,
    required: false,
  },
  sendToClient: {
    type: Schema.Types.Boolean,
    required: false,
  },
});

export default AttemptOfficeSchema;
