import Proposal from '../models/proposalModel.js';

const proposalSave = (data) => {
  console.log('Proposal Save');

  const { attemptId, slides } = data;

  Proposal.findOneAndUpdate({ attempt: attemptId }, { slides })
    .then(() =>
      console.log(`${Date.now()}\tNew Proposal Saved\tAttempt: ${attemptId}`)
    )
    .catch((err) => console.log(err.message));
};

export default proposalSave;
