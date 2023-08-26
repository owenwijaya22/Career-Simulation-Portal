/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { config } from 'dotenv';
import { connect } from 'mongoose';
import fs from 'fs';
import Event from '../models/eventModel.js';

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
    // const attempt = await Attempt.findById('64e9d9ab3882e0b068059e39');
    // console.log(attempt);
    // attempt.modules = {
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
    // await attempt.save();
    // const res = await Event.create({
    //   companyId: '64e44676c2cdfcdaf88d0aec',
    //   eventType: 'START_GAME',
    //   systemEvents: [{ eventType: 'UPDATE_TASK' }],
    // });

    // const event = await Event.findOne({
    //   companyId: '64e44676c2cdfcdaf88d0aec',
    //   eventType: 'START_GAME',
    // });

    // event.systemEvents = [
    //   {
    //     eventType: 'UPDATE_TASKID',
    //     newTaskId: 1,
    //   },
    //   {
    //     eventType: 'UPDATE_STATES',
    //     newTaskId: 1,
    //     newState: {
    //       modules: {
    //         office: { locked: false, alert: true },
    //       },
    //       tasks: [
    //         {
    //           id: 'M1',
    //           sendToClient: true,
    //           active: true,
    //         },
    //       ],
    //       offices: [
    //         {
    //           id: 'boss',
    //           templateId: 'boss1',
    //           visible: true,
    //           alert: true,
    //           ping: true,
    //           active: true,
    //         },
    //       ],
    //     },
    //   },
    // ];

    // const res = await Event.create({
    //   companyId: '64e44676c2cdfcdaf88d0aec',
    //   eventType: 'COMPLETE_OFFICE',
    //   customId: 'boss1',
    //   systemEvents: [],
    // });

    const event = await Event.findOne({
      companyId: '64e44676c2cdfcdaf88d0aec',
      eventType: 'COMPLETE_OFFICE',
      customId: 'boss1',
    });

    event.systemEvents = [
      {
        eventType: 'UPDATE_TASKID',
        newTaskId: 2,
      },
      {
        eventType: 'UPDATE_STATES',
        newState: {
          modules: {
            office: { alert: false },
            chat: { locked: false, alert: true },
            clue: { locked: false, alert: true },
          },
          tasks: [
            {
              id: 'M1',
              sendToClient: true,
              active: false,
            },
            {
              id: 'M2',
              sendToClient: true,
              active: true,
            },
          ],
          offices: [
            {
              id: 'boss',
              templateId: '',
              visible: true,
              alert: false,
              ping: false,
              active: false,
            },
          ],
          chats: [
            {
              id: 'GPT1',
              locked: false,
              alert: true,
            },
            {
              id: 'GPT2',
              locked: false,
              alert: true,
            },
          ],
          clues: [
            {
              id: 'C1',
              alert: true,
            },
            {
              id: 'C2',
              alert: true,
            },
            {
              id: 'C3',
              alert: true,
            },
          ],
        },
      },
    ];
    await event.save();
    console.log('Saved successfully');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
