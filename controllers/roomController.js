import Rooms from '../models/roomModel.js';

export async function createRoom(req, res) {
  try {
    const newRoom = await Rooms.create(req.body);

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
