import Clue from '../models/clueModel.js';

export const createClue = async (req, res) => {
  try {
    if (!req.body.taskId || !req.body.clue) {
      return res.status(400).json({
        status: 'error',
        message: 'A clue must have a taskId and a clue',
      });
    }
    const newClue = await Clue.create(req.body);
    res.status(201).json({
      status: 'success',
      message: 'Clue Created',
      data: {
        clue: newClue,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
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
        status: 'error',
        message: 'No clue found with that ID',
      });
    }
    Clue.findByIdAndUpdate(id, { locked: false });
    return res.status(200).json({
      status: 'success',
      message: 'Clue unlocked',
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};
