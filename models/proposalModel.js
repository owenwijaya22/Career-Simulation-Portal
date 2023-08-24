import { Schema, model } from 'mongoose';

const slidesSchema = new Schema({
  id: {
    type: Number,
    required: [true, 'A slide must have an order'],
  },
  items: [{}],
});

const proposalSchema = new Schema({
  // attempt: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Attempt',
  //   required: [true, 'A proposal must have an attempt'],
  //   unique: true,
  // },
  title: {
    type: String,
    required: [true, 'A proposal must have a title'],
  },
  unlocked: {
    type: Boolean,
    default: false,
    required: [true, 'A proposal must have a boolean'],
  },
  attemptId: {
    type: Schema.Types.ObjectId,
    required: [true, 'A proposal must have an attempt'],
  },
  slides: [slidesSchema],
  thumbnailUrl: {
    type: String,
  },
});

const Proposal = model('Proposal', proposalSchema);

export default Proposal;
