/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { config } from 'dotenv';
import { connect } from 'mongoose';
import fs from 'fs';
import Company from '../models/companyModel.js';

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
    const company = await Company.findById('64e44676c2cdfcdaf88d0aec');
    // company.tasks = [
    //   {
    //     id: 'M1',
    //     taskId: 1,
    //     type: 'MAIN',
    //     description: 'Find your supervisor in office for briefing',
    //   },
    //   {
    //     id: 'M2',
    //     taskId: 2,
    //     type: 'MAIN',
    //     description: 'Talk with clients and read documents',
    //   },
    //   {
    //     id: 'M3',
    //     taskId: 3,
    //     type: 'MAIN',
    //     description: 'Report to your supervisor',
    //   },
    // ];
    // company.initialOffice = [
    //   {
    //     id: 'boss',
    //     templateId: 'boss1',
    //     visible: false,
    //     alert: false,
    //     ping: false,
    //     active: false,
    //   },
    //   {
    //     id: 'group',
    //     templateId: '',
    //     visible: false,
    //     alert: false,
    //     ping: false,
    //     active: false,
    //   },
    // ];

    company.initialChats = [
      {
        id: 'GPT1',
        npcId: '64d9a4c5dc8df46458b6e872',
        sendToClient: true,
        locked: true,
      },
      {
        id: 'GPT2',
        npcId: '64d9a5c9dc8df46458b6e874',
        sendToClient: true,
        locked: true,
      },
      {
        id: 'GPT3',
        npcId: '64d9a716dc8df46458b6e878',
        sendToClient: true,
        locked: true,
      },
    ];
    company.initialClues = [
      {
        id: 'C1',
        clueId: '64db28474248e722edac3443',
        sendToClient: true,
        locked: false,
        alert: true,
      },
      {
        id: 'C2',
        clueId: '64dc3b5becdd1d2a3278077a',
        sendToClient: true,
        locked: true,
        alert: true,
      },
      {
        id: 'C3',
        clueId: '64dc3bacecdd1d2a3278077b',
        sendToClient: true,
        locked: false,
        alert: true,
      },
    ];
    // company.initialModules = {
    //   dashboard: {
    //     locked: false,
    //     alert: false,
    //   },
    //   office: {
    //     locked: true,
    //     alert: false,
    //   },
    //   chat: {
    //     locked: true,
    //     alert: false,
    //   },
    //   clue: {
    //     locked: true,
    //     alert: false,
    //   },
    //   proposal: {
    //     locked: true,
    //     alert: false,
    //   },
    // };
    const res = await company.save();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
