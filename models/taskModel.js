const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Company',
  },
  taskType: {
    type: String,
    required: true,
  },
  templates: [TaskTemplateSchema], // an array of TaskTemplate objects
}, {
  timestamps: true,
});

module.exports = {
  Task: mongoose.model('Task', TaskSchema),
  TaskTemplate: mongoose.model('TaskTemplate', TaskTemplateSchema),
};
