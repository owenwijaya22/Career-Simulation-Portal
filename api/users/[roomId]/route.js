// pages/api/user/[roomId].js
import { getUsers } from '../../../controllers/userController';

export default async function handler(req, res) {
  const { roomId } = req.query;

  if (req.method === 'GET') {
    try {
      const users = await getUsers(roomId);
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
