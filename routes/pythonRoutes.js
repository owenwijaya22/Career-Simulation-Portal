import { Router } from 'express';

import handlePostRequest from '../controllers/pythonController.js';

const pythonRouter = Router();

/**
 * POST /api/python
 * @summary This endpoint runs the python script with the given input.
 * @tags python
 * @param {object} request.body.required - The input details to pass to the python script. Should include a string parameter 'input'.
 * @return {object} 200 - Returns the python script output.
 * @example request - application/json
 * {
 *    "input": "What can you help me with"
 * }
 * @example response - 200 - Returns the python script output.
 * {
 *   "status": "success",
 *   "data": {
 *     "response": "I'm here to assist with your queries. Please let me know how I can help you."
 *   }
 * }
 */
pythonRouter.post('/', handlePostRequest);

export default pythonRouter;
