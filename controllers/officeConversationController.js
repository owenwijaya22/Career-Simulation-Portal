import mongoose from 'mongoose';
import Convo, { Choice } from '../models/officeConversationModel.js';

const saveConvervation = async (req, res) => {
  try {
    const { _id, choiceId, nextId, redirectId } = req.body;
    if (!_id ||(!nextId && !redirectId)) {
      return res.status(400).json({
        message: 'Missing Fields',
      });
    }
    const chat = await Convo.findById(_id);

    if (!chat) {
      return res.status(404).json({
        message: 'Chat not found',
      });
    }
    if(nextId){
      // Find the index of the choice with the specified choiceId
      const choiceIndex = chat.choices.findIndex(choice => choice._id.equals(choiceId));

      if (choiceIndex === -1) {
        return res.status(404).json({
          message: 'Choice not found',
        });
      }

      // Update the nextId of the chosen choice
      chat.choices[choiceIndex].nextId = nextId;

    }
    if(redirectId){
      chat.redirectId=redirectId;
    }
    
    // Save the updated chat document
    await chat.save();
    res.status(201).json(chat);

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const createConversation = async (req, res) => {
  try {
    const {name, messages, npcId, choices,isFinal,redirectId } = req.body;
    const newChat = new Convo({ name, messages, npcId });
    if(choices){
      choices.forEach((choice) => {
        const newChoice = new Choice({
          _id: new mongoose.Types.ObjectId(),
          message: choice.message,
          nextId: choice.nextId,
        });
        newChoice.save();
        newChat.choices.push(newChoice);
      });
    }
    if(isFinal){
        newChat.isFinal=isFinal;
    }
    if(redirectId){
        newChat.redirectId=redirectId;
    }
    // console.log(newChat);
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllConversations = async (req, res) => {
  try {
    const chats = await Convo.find();
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getConversationsByName = async (req, res) => {
  try {
    const chats = await Convo.find({name:req.params.name});
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export { createChat, getChats, saveChat };