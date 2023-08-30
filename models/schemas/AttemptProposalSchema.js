import { Schema, model } from 'mongoose';

const AttemptProposalSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    proposalId: {
        type: Schema.Types.ObjectId,
        ref: 'proposals',
        required: false,
      },
    sendToClient: {
      type: Schema.Types.Boolean,
      required: false,
    },
    locked: {
      type: Schema.Types.Boolean,
      required: false,
    },
    alert: {
      type: Schema.Types.Boolean,
      required: false,
    },
  });
  
export default AttemptProposalSchema;
