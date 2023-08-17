import Clue from '../models/clueModel.js';

export const createClue = async (req, res) => {
  try {
    if (!req.body.taskId || !req.body.clue) {
      return res.status(400).json({
        message: 'A clue must have a taskId and a clue',
      });
    }
    const newClue = await Clue.create(req.body);
    res.status(201).json({
      message: 'Clue Created',
      clue: newClue,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const unlockClue = async (req, res) => {
  try {
    const { id } = req.params;
    const clue = await Clue.findById(id);
    if (!clue) {
      return res.status(404).json({
        message: 'No clue found with that ID',
      });
    }
    Clue.findByIdAndUpdate(id, { locked: false });
    return res.status(200).json({
      message: 'Clue unlocked',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getClue = async (req, res) => {
  try {
    const { id } = req.params;
    const clue = await Clue.findById(id);
    if (!clue) {
      return res.status(404).json({
        status: 'error',
        message: 'No clue found with that ID',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        clue,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

export const getAllClues = async (req, res) => {
  try {
    const { id } = req.params;
    const clues = await Clue.find();
    return res.status(200).json({
      status: 'success',
      data: {
        clues,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};
