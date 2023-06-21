// pages/api/message/[roomId].js
import { getAllMessage } from '../../../controllers/messageController';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { roomId } = req.query;
    try {
      const messages = await getAllMessage(roomId);
      res.status(200).json(messages);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // if any other HTTP method is used
  }
}
