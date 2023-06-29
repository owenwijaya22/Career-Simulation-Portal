const router = require('express').Router();

const {
  createAI,
  getAllAIs,
  getAIById,
  updateAI,
  deleteAI,
} = require('../controllers/aiController');

router.route('/').get(getAllAIs).post(createAI);
router.route('/:id').get(getAIById).put(updateAI).delete(deleteAI);

module.exports = router;
