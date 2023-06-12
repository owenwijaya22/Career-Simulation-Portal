const messageRouter = require('express').Router();

const {
  getAllMessage,
  addMessage,
} = require('../controllers/messageController');

messageRouter.route('/:roomId').get(getAllMessage);
messageRouter.route('/').post(addMessage);

module.exports = messageRouter;
