// pages/api/user/index.js
import { getAllUsers, createUser } from '../../../controllers/userController';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await getAllUsers();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    case 'POST':
      try {
        const user = await createUser(req.body);
        res.status(200).json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}
