import { Schema, model } from 'mongoose';
import AttemptModulesSchema from './schemas/AttemptModulesSchema.js';
import AttemptTaskSchema from './schemas/AttemptTaskSchema.js';
import AttemptOfficeSchema from './schemas/AttemptOfficeSchema.js';
import AttemptChatSchema from './schemas/AttemptChatSchema.js';
import AttemptClueSchema from './schemas/AttemptClueSchema.js';
import AttemptProposalSchema from './schemas/AttemptProposalSchema.js';

const jobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A job must have a title'],
  },
  description: {
    type: String,
    required: [true, 'A job must have a description'],
  },
  // requirements: {
  //   type: String,
  //   required: [true, 'A job must have requirements'],
  // },
});

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'A company must have a name'],
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'A company must have an image/logo'],
    },
    jobs: jobSchema,
    video: {
      type: String,
      required: false,
    },
    NPCs: {
      type: [Schema.Types.ObjectId],
      ref: 'NPC',
      required: true,
    },
    tasks: {
      type: [AttemptTaskSchema],
      required: false,
    },
    initialModules: {
      type: AttemptModulesSchema,
      required: false,
    },
    initialOffices: {
      type: [AttemptOfficeSchema],
      required: false,
    },
    initialChats: {
      type: [AttemptChatSchema],
      required: false,
    },
    initialClues: {
      type: [AttemptClueSchema],
      required: false,
    },
    initialProposals: {
      type: [AttemptProposalSchema],
      required: false,
    }
  },
  {
    timestamps: true,
  }
);

const Company = model('Company', companySchema);

export default Company;
