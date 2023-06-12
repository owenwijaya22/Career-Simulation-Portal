const roomRouter = require('express').Router();

const {
    createRoom,
    deleteRoom,
    leaveRoom
  } = require('../controllers/roomController');
  
// Room Routes for the frontend to create buttons that make requests to the endpoints
router.route('/room').post(createRoom); // Create a new room
router.route('/room/:roomId').delete(deleteRoom); // Delete a room by its ID
router.route('/room/:roomId/leave').patch(leaveRoom); // Remove the current user from a room
  
module.exports = roomRouter;