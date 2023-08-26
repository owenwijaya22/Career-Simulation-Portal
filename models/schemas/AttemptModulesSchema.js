import { Schema, model } from 'mongoose';

const AttemptModuleSchema = new Schema({
  locked: {
    type: Schema.Types.Boolean,
    required: false,
  },
  alert: {
    type: Schema.Types.Boolean,
    required: false,
  },
});

const AttemptModulesSchema = new Schema({
  dashboard: {
    type: AttemptModuleSchema,
    required: false,
  },
  office: {
    type: AttemptModuleSchema,
    required: false,
  },
  chat: {
    type: AttemptModuleSchema,
    required: false,
  },
  clue: {
    type: AttemptModuleSchema,
    required: false,
  },
  proposal: {
    type: AttemptModuleSchema,
    required: false,
  },
});

export default AttemptModulesSchema;
