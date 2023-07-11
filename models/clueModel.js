import mongoose from 'mongoose';

const clueSchema = new mongoose.Schema({
  clue: {
    type: String,
    required: [true, 'A clue must have a value'],
  },
  taskId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    required: [true, 'A clue must be related to a task'],
  },
  locked: {
    type: Boolean,
    default: true,
  },
});

const Clue = mongoose.model('Clue', clueSchema);

export default Clue;
