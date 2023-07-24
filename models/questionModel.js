import mongoose from 'mongoose';

const choiceSchema = new mongoose.Schema({
  value: {
    type: String,
    required: [true, 'A choice must have a value'],
    trim: true,
  },
  rating: {
    // tell us which one is best and which is worst
    type: Number,
    required: [true, 'A choice must have an order'],
  },
});

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, 'A question must have a question'],
    trim: true,
  },
  npc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'NPC',
    required: [true, 'A question must be related to an NPC'],
  },
  choices: [choiceSchema],
});

const Choice = mongoose.model('Choice', choiceSchema);
const Question = mongoose.model('Question', questionSchema);

export { Choice };
export default Question;
