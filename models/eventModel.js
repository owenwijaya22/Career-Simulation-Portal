import mongoose, { Schema } from 'mongoose';
import eventEnums from '../constants/eventEnums.js';

const userEvent = new Schema({
  companyId: {
    type: String,
    required: [true, 'An event must have a companyId'],
  },
  eventType: {
    type: String,
    // enum: eventEnums,
    required: [true, 'An event must have a type'],
  },
  systemEvents: {
    type: [Schema.Types.Object],
    required: false,
  },
  customId: {
    type: String,
  },
});

const UserEvent = mongoose.model('UserEvent', userEvent);

export default UserEvent;
