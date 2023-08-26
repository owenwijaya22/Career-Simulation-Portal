import { Schema, model } from 'mongoose';

const AttemptTaskSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  taskId: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['MAIN', 'SIDE'],
    required: true,
  },
  sendToClient: {
    type: Schema.Types.Boolean,
    required: false,
  },
  //mostly for concurrent side tasks
  active: {
    type: Schema.Types.Boolean,
    required: false,
  },
  completed: {
    type: Schema.Types.Boolean,
    required: false,
  },
});

export default AttemptTaskSchema;
