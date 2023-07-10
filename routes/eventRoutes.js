import { Router } from 'express';

import { triggerEvent, createEvent } from '../controllers/eventController.js';

const eventRouter = Router();

eventRouter.route('/').get(triggerEvent).post(createEvent);

export default eventRouter;
