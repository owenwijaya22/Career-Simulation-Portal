// pages/api/room/index.js
import { getAllRooms, createRoom } from '../../../controllers/roomController';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const rooms = await getAllRooms();
        res.status(200).json(rooms);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case 'POST':
      try {
        const room = await createRoom(req.body);
        res.status(200).json(room);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
