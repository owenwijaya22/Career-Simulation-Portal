/* eslint-disable camelcase */
import Event from '../models/eventModel.js';
import Question from '../models/questionModel.js';
import { Task } from '../models/taskModel.js';
import Clue from '../models/clueModel.js';
import Attempt from '../models/attemptModel.js';

export const requestHandler = async (req, res) => {
  try {
    const { nextEventType } = req.body;
    if (!nextEventType) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing next event type',
      });
    }
    const data = {};
    if (nextEventType.inclueds('NEXT_QUESTION')) {
      data.question = await getNextQuestion(req.body);
    }
    if (nextEventType.inclueds('NEW_TASK')) {
      data.question = await getNextQuestion(req.body);
    }
    if (nextEventType.inclueds('UNLOCK_CLUE')) {
      data.question = await getNextQuestion(req.body);
    }
    if (nextEventType.inclueds('COMPLETE_TASK')) {
      data.question = await getNextQuestion(req.body);
    }
    if (nextEventType.inclueds('UNLOCK_AI')) {
      data.question = await getNextQuestion(req.body);
    }
    if (Object.keys(data).length === 0) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid next event type',
      });
    }
    return res.status(200).json({
      status: 'success',
      data,
    });
  } catch (err) {
    return res.status(400).json({
      status: 'error',
      message: err.message,
    });
  }
};

// const getNextQuestion = async (body) => {
//   const { attemptId, currentQuestion } = body;
//   const currentAttempt = await Attempt.findById(attemptId);
//   if (!currentAttempt) {
//     throw new Error('No attempt found with that ID');
//   }
//   const { questions } = currentAttempt.session;
// };

export const createEvent = async (req, res) => {
  try {
    const { choiceId, next_question_id, next_task_id, next_clue_id } = req.body;
    if (!choiceId && (next_clue_id || next_question_id || next_task_id)) {
      return res.status(400).json({
        status: 'error',
        message:
          'An event must be related to a choice, and only one of next_clue_id, next_question_id, next_task_id can be specified',
      });
    }
    const newEvent = await Event.create({
      choiceId,
      next_question_id,
      next_task_id,
      next_clue_id,
    });
    res.status(201).json({
      status: 'success',
      message: 'Event Created',
      data: {
        event: newEvent,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

export const triggerEvent = async (req, res) => {
  try {
    const { choiceId } = req.body;
    const event = await Event.findOne({ choiceId });
    if (!event) {
      return res.status(404).json({
        status: 'error',
        message: 'No event found associated with this choice',
      });
    }
    const { next_question_id, next_task_id, next_clue_id } = event;
    const data = [];
    if (next_question_id) {
      const nextMoveType = 'question';
      const nextMove = await Question.findById(next_question_id);
      data.push({ nextMoveType, nextMove });
    }
    if (next_task_id) {
      const nextMoveType = 'task';
      const nextMove = await Task.findById(next_task_id);
      data.push({ nextMoveType, nextMove });
    }
    if (next_clue_id) {
      const nextMoveType = 'clue';
      const nextMove = await Clue.findById(next_clue_id);
      await Clue.findByIdAndUpdate(next_clue_id, { locked: false });
      data.push({ nextMoveType, nextMove });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Event triggered',
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

// export default createEvent;
