import { Schema, model } from 'mongoose';

const AttemptSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  endTime: {
    type: Date,
  },
  tasks: [
    {
      taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
      },
      complete: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

const Attempt = model('Attempt', AttemptSchema);

export default Attempt;
