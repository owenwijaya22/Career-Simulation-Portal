import mongoose from 'mongoose';

const choiceSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, 'A choice must have a value'],
    trim: true,
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'A question must have a question'],
    trim: true,
  },
  choices: [choiceSchema],
  task_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: [true, 'A question must be related to a task'],
  },
});

const Choice = mongoose.model('Choice', choiceSchema);
const Question = mongoose.model('Question', questionSchema);

export { Choice };
export default Question;
