/* eslint-disable import/prefer-default-export */
/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable camelcase */
import mongoose from 'mongoose';
import Question, { Choice } from '../models/questionModel.js';

const createQuestion = async (req, res) => {
  try {
    const { question, npcId, choices } = req.body;
    const newQuestion = new Question({ question, npcId });
    choices.forEach((choice) => {
      const newChoice = new Choice({
        _id: new mongoose.Types.ObjectId(),
        value: choice.value,
        rating: choice.rating,
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
