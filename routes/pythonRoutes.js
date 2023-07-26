import { Router } from 'express';
import { handlePostRequest1, handlePostRequest2 } from '../controllers/pythonController.js';

const pythonRouter = Router();

/**
 * POST /api/python/script1
 * @summary This endpoint runs the first python script with the given input.
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
pythonRouter.post('/chatroom_1', handlePostRequest1);

/**
 * POST /api/python/script2
 * @summary This endpoint runs the second python script with the given input.
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
 *     "response": "I'm another Python script. How can I assist you?"
 *   }
 * }
 */
pythonRouter.post('/chatroom_2', handlePostRequest2);

export default pythonRouter;
