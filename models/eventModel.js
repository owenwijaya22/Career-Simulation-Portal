import mongoose from 'mongoose';
import eventEnums from '../contants/eventEnums.js';

const useEventTypeEnum = new mongoose.Schema({
  nextEventType: {
    type: String,
    enum: eventEnums,
    required: [true, 'An event must have a type'],
  },
});

const userEvent = new mongoose.Schema({
  choiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Choice',
    required: [true, 'An event must be related to a choice'],
  },
  nextEventType: [useEventTypeEnum],
  nextEventId: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
  },
});

const UserEvent = mongoose.model('UserEvent', userEvent);

export default UserEvent;
