import Proposal from '../models/proposalModel.js';

export const saveProposal = async (req, res) => {
  try {
    const { attemptId, slides } = req.body;
    if (!attemptId || !slides) {
      return res.status(400).json({
        status: 'failed',
        message: 'Missing Fields',
      });
    }
    await Proposal.findOneAndUpdate({ attempt: attemptId }, { slides });
    return res.status(204).json({
      status: 'success',
      data: {
        message: 'Proposal Saved Successfully',
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message,
    });
  }
};

export const createProposal = async (req, res) => {
  try {
    const { attemptId, slides } = req.body;
    if (!attemptId) {
      return res.status(400).json({
        status: 'failed',
        message: 'Missing Fields',
      });
    }
    const proposal = await Proposal.create({
      attempt: attemptId,
      slides,
    });
    return res.status(201).json({
      status: 'success',
      data: {
        message: 'Proposal Created Successfully',
        proposal,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message,
    });
  }
};
