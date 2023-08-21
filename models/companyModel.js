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
    // website: {
    //   type: String,
    //   required: [true, 'A company must have a website'],
    //   unique: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Company = model('Company', companySchema);

export default Company;
