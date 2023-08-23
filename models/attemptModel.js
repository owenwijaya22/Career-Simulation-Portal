import { Schema, model } from 'mongoose';

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

  // systemSession: {
  //   type: {
  //     taskId: Schema.Types.ObjectId,
  //     simStarted: Boolean,
  //     taskDescription: String,
  //     status: {
  //       dashboard: { locked: Boolean, alert: Boolean },
  //       office: { locked: Boolean, alert: Boolean },
  //       chat: { locked: Boolean, alert: Boolean },
  //       clue: {},
  //       proposal: {
  //         locked: Boolean,
  //         alert: Boolean,
  //       },
  //     },
  //     modal: {
  //       mode: String,
  //       open: String,
  //     },
  //   },
  //   default: {
  //     taskId: 0,
  //     simStarted: false,
  //     taskDescription: 'No Task',
  //     status: {
  //       dashboard: {
  //         locked: false,
  //         alert: false,
  //       },
  //       office: {
  //         locked: true,
  //         alert: false,
  //       },
  //       chat: {
  //         locked: true,
  //         alert: false,
  //       },
  //       clue: {
  //         locked: true,
  //         alert: false,
  //       },
  //       proposal: {
  //         locked: false,
  //         alert: false,
  //       },
  //     },
  //     modal: {
  //       mode: '',
  //       open: false,
  //     },
  //   },
  // },
  // officeSession: {
  //   type: {
  //     status: {
  //       boss: {
  //         locked: Boolean,
  //         alert: Boolean,
  //         ping: Boolean,
  //         visible: Boolean,
  //         templateId: String, // TODO: change to Schema.Types.ObjectId when migrating event flow
  //       },
  //     },
  //   },
  //   default: {
  //     status: {
  //       boss: {
  //         templateId: 'boss1',
  //         visible: false,
  //         alert: false,
  //         ping: false,
  //         active: false,
  //       },
  //       group: {
  //         templateId: 'group',
  //         visible: false,
  //         alert: false,
  //         ping: false,
  //         active: false,
  //       },
  //     },
  //   },
  // },
});

const Attempt = model('Attempt', AttemptSchema);

export default Attempt;
