import Message from '../models/messageModel.js';

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
    // Since Message.create() also saves the document, no need to call data.save()
    const data = await Message.create({ message, roomId, senderType, sender });
    /**
     * Connecting to Python server
     * The answer returned can be transmitted back to the chat client.
     * This message can then be rendered successfully.
     */
    if (data) {
      return res.status(200).json({
        status: 'success',
        data: {
          message: 'Chat Added Successfully',
          data,
        },
      });
    }
    return res.status(400).json({
      status: 'failed',
      message: 'Chat was not added into the database',
    });
  } catch (err) {
    return res.status(404).json({
      status: 'failed',
      message: `Failed to retrieve messages: ${err.message}`,
    });
  }
}
