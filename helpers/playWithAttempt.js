/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { config } from 'dotenv';
import { connect } from 'mongoose';
import fs from 'fs';
import Attempt from '../models/attemptModel.js';

config({ path: './.env' });

const dbUri = process.env.MONGODB_URI.replace(
  '<password>',
  process.env.MONGODB_PASSWORD
);
connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!!');
  run();
});

const run = async () => {
  try {
    const attempt = await Attempt.findById('64e9d9ab3882e0b068059e39');
    console.log(attempt);
    attempt.modules = {
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
        locked: true,
        alert: false,
      },
    };
    await attempt.save();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
