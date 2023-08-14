import mongoose, { Schema as _Schema, model } from 'mongoose';

const { Schema } = mongoose;

// represents each individual steps in one task
const TaskTemplateSchema = new Schema({
  // The name of the step: "Introduction", "Conclusion", etc.
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  order: {
    type: Number,
    required: true,
  },
});

// each task contains an array of TaskTemplate objects; a sequence of steps
const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Company',
    },
    taskType: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    templates: [TaskTemplateSchema], // an array of TaskTemplate objects
  },
  {
    timestamps: true,
  }
);

export const Task = model('Task', TaskSchema);
export const TaskTemplate = model('TaskTemplate', TaskTemplateSchema);
