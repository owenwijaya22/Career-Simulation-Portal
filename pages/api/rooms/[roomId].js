// pages/api/room/[roomId].js
import { getRoom, deleteRoom } from '../../../controllers/roomController';

export default async function handler(req, res) {
  const { roomId } = req.query;
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const room = await getRoom(roomId);
        res.status(200).json(room);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case 'DELETE':
      try {
        const deletedRoom = await deleteRoom(roomId);
        res.status(200).json(deletedRoom);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
