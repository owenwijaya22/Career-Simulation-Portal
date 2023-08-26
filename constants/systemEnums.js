import { Schema } from 'mongoose';

const systemSessionType = {
  taskId: Schema.Types.ObjectId,
  simStarted: Boolean,
  taskDescription: String,
  status: {
    dashboard: { locked: Boolean, alert: Boolean },
    office: { locked: Boolean, alert: Boolean },
    chat: { locked: Boolean, alert: Boolean },
    clue: {},
    proposal: {
      locked: Boolean,
      alert: Boolean,
    },
  },
  modal: {
    mode: String,
    open: String,
  },
};

export default systemSessionType;
