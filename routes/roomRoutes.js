const roomRouter = require('express').Router();

const {
    createRoom,
    deleteRoom,
    leaveRoom,
    getAllRooms,
    getRoom
  } = require('../controllers/roomController');
  
// Room Routes for the frontend to create buttons that make requests to the endpoints
roomRouter.route('/').get(getAllRooms); // Get all rooms (for testing purposes
roomRouter.route('/room').post(createRoom); // Create a new room
roomRouter.route('/room/:roomId').get(getRoom); // Get room info
roomRouter.route('/room/:roomId').delete(getRoom); // Get a room by its ID
roomRouter.route('/room/:roomId').delete(deleteRoom); // Delete a room by its ID
roomRouter.route('/room/:roomId/leave').patch(leaveRoom); // Remove the current user from a room

module.exports = roomRouter;