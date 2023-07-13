import { Schema, model } from 'mongoose';

const metricsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A metric must have a user'],
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'A metric must have a company which the user is using'],
  },
  attempt: {
    type: Schema.Types.ObjectId,
    ref: 'Attempt',
    required: [true, 'A metric must have an attempt'],
  },
  value: {
    type: Number,
    required: [true, 'A metric must have a value'],
    default: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
  },
  logs: {
    type: Array,
    default: [],
  },
});

const Metrics = model('Metrics', metricsSchema);

export default Metrics;
