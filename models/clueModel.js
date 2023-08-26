import mongoose from 'mongoose';
import clueEnums from '../constants/clueEnums.js';

const clueSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
      required: [true, 'A clue must belong to a company'],
    },
    locked: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      enum: clueEnums,
      required: [true, 'A clue must have a type'],
    },
  },
  {
    timestamps: true,
  }
);

const Clue = mongoose.model('Clue', clueSchema);

export default Clue;
