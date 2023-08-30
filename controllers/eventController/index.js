/* eslint-disable camelcase */
import Event from '../../models/eventModel.js';
import Question from '../../models/questionModel.js';
import { Task } from '../../models/taskModel.js';
import Clue from '../../models/clueModel.js';
import Attempt from '../../models/attemptModel.js';
import { updateObject } from '../../utils/index.js';
// import updateTaskIdEvent from "./eventController/helper";

export const triggerEvent = async (req, res) => {
  try {
    const { eventType, attemptId } = req.body;

    const attempt = await Attempt.findById(attemptId);
    if (!attempt) throw { message: 'Attempt error' };

    const companyId = attempt.companyId;

    let userEvent = null;
    if (eventType === 'START_GAME') {
      userEvent = await Event.findOne({
        companyId,
        eventType,
      });
    } else if (eventType === 'COMPLETE_OFFICE') {
      const { templateId } = req.body;
      userEvent = await Event.findOne({
        companyId,
        eventType,
        customId: templateId,
      });
    }
    if (!userEvent) throw { message: 'Event error' };
    console.log(userEvent);
    const systemEvents = userEvent.systemEvents;
    let tmpState = {
      modules: attempt.modules,
      tasks: attempt.tasks,
      offices: attempt.offices,
      clues: attempt.clues,
      chats: attempt.chats,
    };
    let newTaskId = null;
    for (let i = 0; i < systemEvents.length; i++) {
      let ev = systemEvents[i];
      if (ev.eventType === 'UPDATE_STATES') {
        tmpState = updateObject(tmpState, ev.newState);
      } else if (ev.eventType === 'UPDATE_TASKID') {
        newTaskId = ev.newTaskId;
      }
    }
    console.log('newTaskId', newTaskId);
    if (newTaskId) attempt.currentMainTaskId = newTaskId;
    attempt.modules = tmpState.modules;
    attempt.tasks = tmpState.tasks;
    attempt.offices = tmpState.offices;
    attempt.clues = tmpState.clues;
    attempt.chats = tmpState.chats;

    await attempt.save();
    return res.status(200).json({
      newState: tmpState,
      newTaskId,
    });

    return res.status(200).json({ status: 'test_trigger_event' });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};
  const createEvent=async(req,res)=>{
  try{
    const {companyId,eventType,systemEvents}=req.body
    const newEvent=new Event({companyId,eventType,systemEvents});
    await newEvent.save();
    res.status(201).json(newEvent);
  }catch(error){
    return res.status(400).json({
      message: error.message,
    });
  }
};
const updateEvent = async (req, res) => {
  try{
    const { eventType, companyId } = req.body;

    const event = await Event.findOne({ companyId, eventType });
    // const { systemEvents } = event;
    // const resData = {}
    // for(var i=0;i<systemEvents.length;i++){
    //   const eventType=systemEvents[i];
    //   if(eventType=="UPDATE_TASKID"){
    //     const task = await updateTaskIdEvent(companyId,element.newTaskId);
    //     resData["task"] = task;
    //   }
    //   else if(eventType=="UPDATE_STATES"){
    //     await updateStateEvent(element);
    //   }
    // }
    // const newState={
    //   "modules":{
    //     "office":{
    //       "alert":true
    //     }
    //   },
    //   "offices":[
    //     {
    //       id:"boss",
    //       templateId:"boss2",
    //       visible:true,
    //       alert: true,
    //       ping: true,
    //       active: true,
    //     }
    //   ],
    //   "tasks":[
    //     {
    //       id:"M1",
    //       sendToClient:true,
    //       active:false
    //     },
    //     {
    //       id:"M2",
    //       sendToClient:true,
    //       active:false
    //     },
    //     {
    //       id:"M3",
    //       sendToClient:true,
    //       active:true
    //     }
    //   ]
    // }
    // event.systemEvents[1].newState=newState;
    await event.save();
    res.status(201).json(event);
  }catch (error) {
    res.status(500).json({ message: error.message });
}
};
export {createEvent,updateEvent}

// const getNextQuestion = async (body) => {
//   const { attemptId, currentQuestion } = body;
//   const currentAttempt = await Attempt.findById(attemptId);
//   if (!currentAttempt) {
//     throw new Error('No attempt found with that ID');
//   }
//   const { questions } = currentAttempt.session;
// };

// export const createEvent = async (req, res) => {
//   try {
//     const { choiceId, next_question_id, next_task_id, next_clue_id } = req.body;
//     if (!choiceId && (next_clue_id || next_question_id || next_task_id)) {
//       return res.status(400).json({
//         message:
//           'An event must be related to a choice, and only one of next_clue_id, next_question_id, next_task_id can be specified',
//       });
//     }
//     const newEvent = await Event.create({
//       choiceId,
//       next_question_id,
//       next_task_id,
//       next_clue_id,
//     });
//     res.status(201).json({
//       message: 'Event Created',
//       event: newEvent,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };

// export const triggerEvent = async (req, res) => {
//   try {
//     const { choiceId } = req.body;
//     const event = await Event.findOne({ choiceId });
//     if (!event) {
//       return res.status(404).json({
//         message: 'No event found associated with this choice',
//       });
//     }
//     const { next_question_id, next_task_id, next_clue_id } = event;
//     const data = [];
//     if (next_question_id) {
//       const nextMoveType = 'question';
//       const nextMove = await Question.findById(next_question_id);
//       data.push({ nextMoveType, nextMove });
//     }
//     if (next_task_id) {
//       const nextMoveType = 'task';
//       const nextMove = await Task.findById(next_task_id);
//       data.push({ nextMoveType, nextMove });
//     }
//     if (next_clue_id) {
//       const nextMoveType = 'clue';
//       const nextMove = await Clue.findById(next_clue_id);
//       await Clue.findByIdAndUpdate(next_clue_id, { locked: false });
//       data.push({ nextMoveType, nextMove });
//     }
//     return res.status(200).json({
//       message: 'Event triggered',
//       data,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };

// export default createEvent;
