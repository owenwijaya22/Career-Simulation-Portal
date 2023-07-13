import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  choiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Choice',
    required: [true, 'An event must be related to a choice'],
  },
  next_question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: false,
  },
  next_task_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: false,
  },
  next_clue_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Clue',
    required: false,
  },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
