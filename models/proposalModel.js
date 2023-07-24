import { Schema, model } from 'mongoose';

const slidesSchema = new Schema({
  order: {
    type: Number,
    required: [true, 'A slide must have an order'],
  },
  slideItems: [String],
});

const proposalSchema = new Schema({
  attempt: {
    type: Schema.Types.ObjectId,
    ref: 'Attempt',
    required: [true, 'A proposal must have an attempt'],
  },
  slides: [slidesSchema],
});

const Proposal = model('Proposal', proposalSchema);

export default Proposal;
