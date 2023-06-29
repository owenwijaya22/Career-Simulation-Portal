const AI = require('../models/aiModel');

exports.createAI = async (req, res) => {
  try {
    if (!req.body.name || !req.body.image || !req.body.prompt) {
      return res.status(400).json({ message: 'Missing Fields' });
    }
    const newAI = await AI.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        ai: newAI,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getAllAIs = async (req, res) => {
  try {
    const ais = await AI.find();
    if (!ais) {
      return res.status(404).json({ status: 'error', message: 'No ais found' });
    }
    res.status(200).json({
      status: 'success',
      results: ais.length,
      data: {
        ais,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

exports.getAIById = async (req, res) => {
  try {
    const { id } = req.params;
    const ai = await AI.findById(id);
    if (!ai) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No ai found with that ID' });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        ai,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.updateAI = async (req, res) => {
  try {
    const { id } = req.params;
    const ai = await AI.findById(id);
    if (!ai) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No ai found with that ID' });
    }
    req.body.modifiedAt = Date.now();
    const updatedAI = await AI.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json({
      status: 'success',
      data: { ai: updatedAI },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.deleteAI = async (req, res) => {
  try {
    const { id } = req.params;
    const ai = await AI.findById(id);
    if (!ai) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No ai found with that ID' });
    }
    await AI.findByIdAndDelete(id);
    return res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
};
