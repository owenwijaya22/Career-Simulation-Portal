/* eslint-disable import/prefer-default-export */
/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable camelcase */
import mongoose from 'mongoose';
import Question, { Choice } from '../models/questionModel.js';

const createQuestion = async (req, res) => {
  try {
    const { question, choices, task_id } = req.body;
    const newQuestion = new Question({ question, task_id });
    choices.forEach((choice, index) => {
      const newChoice = new Choice({
        _id: new mongoose.Types.ObjectId(),
        choice: choice,
        order: index + 1,
      });
      newQuestion.choices.push(newChoice);
    });
    // console.log(newQuestion);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createQuestion, getQuestions };
