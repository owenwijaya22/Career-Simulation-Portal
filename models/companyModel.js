import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A job must have a title'],
  },
  description: {
    type: String,
    required: [true, 'A job must have a description'],
  },
  requirements: {
    type: String,
    required: [true, 'A job must have requirements'],
  },
  video: {
    type: String,
    required: false,
  },
});

const companyScheme = new Schema(
  {
    name: {
      type: String,
      required: [true, 'A company must have a name'],
      unique: true,
    },
    description: {
      type: String,
      required: [true, 'A company must have a description'],
    },
    image: {
      type: String,
      required: [true, 'A company must have an image/logo'],
    },
    website: {
      type: String,
      required: [true, 'A company must have a website'],
      unique: true,
    },
    jobs: [jobSchema],
  },
  {
    timestamps: true,
  }
);

const Company = model('Company', companyScheme);

export default Company;
