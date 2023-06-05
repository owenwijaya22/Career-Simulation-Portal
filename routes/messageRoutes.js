const router = require('express').Router();

const {
  getAllMessage,
  addMessage,
} = require('../controllers/messageController');

router.route('/:roomId').get(getAllMessage);
router.route('/').post(addMessage);

module.exports = router;
