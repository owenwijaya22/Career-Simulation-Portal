const mongoose = require('mongoose');

const companyScheme = new mongoose.Schema({
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
  video: {
    type: String,
    required: [true, 'A company must have a video'],
  },
  website: {
    type: String,
    required: [true, 'A company must have a website'],
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  modifiedAt: {
    type: Date,
    default: Date.now(),
  },
});

const Company = mongoose.model('Company', companyScheme);

module.exports = Company;
