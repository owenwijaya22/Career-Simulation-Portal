import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
  currentTask: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
  },
  unlockedAIs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'AI',
    },
  ],
  unlockedClues: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clue',
    },
  ],
  unlockedTasks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
  unlockedChoiceGames: [
    {
      type: Schema.Types.ObjectId,
      ref: 'AI',
    },
  ],
  questions: [
    {
      question: {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

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
    required: true,
  },
  session: sessionSchema,
});

const Attempt = model('Attempt', AttemptSchema);

export default Attempt;
