import { Schema, model } from 'mongoose';

const sessionSchema = new Schema({
  currentTask: {
    type: Schema.Types.ObjectId,
    ref: 'Task',
  },
  unlockedAIs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'NPC',
    },
  ],
  unlockedClues: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clue',
    },
  ],
  unlockedRooms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Room',
    }
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
      ref: 'NPC',
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
    default: Date.now(),
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: [true, 'An attempt must have a duration in minutes'],
    default: 60,
  },
  completedTime: {
    type: Number,
    required: [true, 'An attempt must have a completed time in minutes'],
    default: 0,
  },
  scores: [Number],
  session: sessionSchema,
});

const Attempt = model('Attempt', AttemptSchema);

export default Attempt;
