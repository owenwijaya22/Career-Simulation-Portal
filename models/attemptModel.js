import { Schema, model } from 'mongoose';
import officeSessionType from '../contants/officeEnums.js';
import systemSessionType from '../contants/systemEnums.js';

const AttemptSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: [true, 'An attempt must have a duration in minutes'],
    default: 60,
  },
  completedTime: {
    type: Number,
    required: [true, 'An attempt must have a completed time in minutes'],
    default: 0,
  },
  // scores: [Number],

  // FOR FUTURE IMPLMENTATION

  systemSession: {
    type: systemSessionType,
    default: {
      taskId: 0,
      simStarted: false,
      taskDescription: 'No Task',
      status: {
        dashboard: {
          locked: false,
          alert: false,
        },
        office: {
          locked: true,
          alert: false,
        },
        chat: {
          locked: true,
          alert: false,
        },
        clue: {
          locked: true,
          alert: false,
        },
        proposal: {
          locked: false,
          alert: false,
        },
      },
      modal: {
        mode: '',
        open: false,
      },
    },
  },
  officeSession: {
    type: officeSessionType,
    default: {
      status: {
        boss: {
          templateId: 'boss1',
          visible: false,
          alert: false,
          ping: false,
          active: false,
        },
        group: {
          templateId: 'group',
          visible: false,
          alert: false,
          ping: false,
          active: false,
        },
      },
    },
  },
});

const Attempt = model('Attempt', AttemptSchema);

export default Attempt;
