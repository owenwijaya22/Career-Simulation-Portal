import Proposal from '../models/proposalModel.js';

export const saveProposal = async (req, res) => {
  try {
    const { attemptId, slides } = req.body;
    if (!attemptId || !slides) {
      return res.status(400).json({
        message: 'Missing Fields',
      });
    }
    await Proposal.findOneAndUpdate({ attempt: attemptId }, { slides });
    return res.status(204).json({
      message: 'Proposal Saved Successfully',
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const createProposal = async (req, res) => {
  try {
    const { attemptId, slides } = req.body;
    if (!attemptId) {
      return res.status(400).json({
        message: 'Missing Fields',
      });
    }
    const proposal = await Proposal.create({
      attempt: attemptId,
      slides,
    });
    return res.status(201).json({
      message: 'Proposal Created Successfully',
      proposal,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getProposal = async (req, res) => {
  try {
    const { attemptId } = req.query; //for GET request, query is recommended
    if (!attemptId) {
      return res.status(400).json({
        message: 'Missing attemptId in request parameters',
      });
    }
    const proposal = await Proposal.findOne({ attempt: attemptId });
    if (!proposal) {
      return res.status(404).json({
        message: 'Proposal not found',
      });
    }
    return res.status(200).json({
      message: 'Proposal Found',
      proposal,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
