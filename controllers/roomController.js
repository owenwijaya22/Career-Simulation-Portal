import Rooms from '../models/roomModel.js';
import User from '../models/userModel.js';

export async function createRoom(req, res) {
  try {
    const { userId, prompt, npc, company } = req.body;
    if (!userId || !prompt || !npc || !company) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing Fields' });
    }
    const newRoom = await Rooms.create({ userId, prompt, npc, company });
    res.status(201).json({
      status: 'success',
      data: {
        room: newRoom,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err,
    });
  }
}

export async function deleteRoom(req, res) {
  try {
    if (!req.params.roomId) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing Fields' });
    }
    await Rooms.findByIdAndDelete(req.params.roomId);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
}

export async function leaveRoom(req, res) {
  try {
    if (!req.params.roomId) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing Fields' });
    }
    const room = await Rooms.findById(req.params.roomId);
    const userIndex = room.users.indexOf(req.user.id);

    if (userIndex > -1) {
      room.users.splice(userIndex, 1);
      await room.save();
    }

    res.status(200).json({
      status: 'success',
      data: {
        room,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
}

export async function getUsers(req, res) {
  try {
    const { roomId } = req.params;
    const users = await User.find({ roomId: roomId });

    return res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(503).json({ message: error.message });
  }
}

export async function getAllRooms(req, res) {
  try {
    const rooms = await Rooms.find();

    res.status(200).json({
      status: 'success',
      data: {
        rooms,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
}

export async function getRoom(req, res) {
  try {
    const room = await Rooms.findById(req.params.roomId);
    res.status(200).json({
      status: 'success',
      data: {
        room,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      message: err,
    });
  }
}

// exports.joinRoom = async (req, res) => {
//   try {
//     const room = await Room.findById(req.params.roomId);
//     const userIndex = room.users.indexOf(req.user.id);

//     if (userIndex === -1) {
//       room.members.push(req.user.id);
//       await room.save();
//     }

//     res.status(200).json({
//       status: 'success',
//       data: {
//         room,
//       },
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'failed',
//       message: err,
//     });
//   }
// };
