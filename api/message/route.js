// pages/api/message/index.js
import { addMessage } from '../../../controllers/messageController';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const newMessage = await addMessage(req.body);
      res.status(200).json(newMessage);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" }); // if any other HTTP method is used
  }
}
