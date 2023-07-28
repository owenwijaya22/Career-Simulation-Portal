import Message from '../models/messageModel.js';
import Rooms from '../models/roomModel.js';
import axios from 'axios';
import { config } from 'dotenv';
config({ path: './.env' });

export async function getAllMessage(req, res) {
  try {
    if (!req.params.roomId) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing Fields' });
    }
    const messages = await Message.find({ roomId: req.params.roomId }).limit(
      100
    );
    res.status(200).json({
      status: 'success',
      data: {
        messages,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err,
    });
  }
}

export async function addMessage(req, res) {
  try {
    const { message, roomId, senderType, sender } = req.body;

    if (!message || !roomId || !senderType || !sender) {
      return res.status(400).json({ 
        status: 'failed',
        message: 'Missing Fields',
      });
    }
    const userMessage = await Message.create({ message, roomId, senderType, sender });
    if (senderType === 'USER') {
      const port = process.env.PORT || 3000;
      const pythonResponse = await fetch(`http://localhost:${port}/api/python/chatroom_1`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ input: message })
      });
      const pythonOutput = pythonResponse.data;

      const room = await Rooms.findById(roomId);

      const aiMessage = await Message.create({
        message: pythonOutput,
        roomId: roomId,
        senderType: 'NPC',
        sender: room.npc,
      });
      if (aiMessage) {
        return res.status(200).json({
          status: 'success',
          data: {
            message: 'Chats Added Successfully',
            userMessage,
            aiMessage
          },
        });
      }
      return res.status(400).json({
        status: 'failed',
        message: 'Chat was not added into the database',
      });
    }
  } catch (err) {
      return res.status(404).json({
        status: 'failed',
        message: `Failed to retrieve messages: ${err.message}`,
      });
    }
  }

