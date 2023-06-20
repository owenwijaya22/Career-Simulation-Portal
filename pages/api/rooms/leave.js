// pages/api/room/[roomId]/leave.js
import { leaveRoom } from '../../../controllers/roomController';

export default async function handler(req, res) {
  const { roomId } = req.query;

  if (req.method === 'PATCH') {
    try {
      const updatedRoom = await leaveRoom(roomId);
      res.status(200).json(updatedRoom);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
