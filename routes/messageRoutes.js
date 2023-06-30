import { Router } from 'express';

import { getAllMessage, addMessage } from '../controllers/messageController.js';

const messageRouter = Router();

messageRouter.route('/:roomId').get(getAllMessage);
messageRouter.route('/').post(addMessage);

export default messageRouter;
