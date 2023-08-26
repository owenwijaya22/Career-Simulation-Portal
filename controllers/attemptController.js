import mongoose from 'mongoose';
import Attempt from '../models/attemptModel.js';
import Proposal from '../models/proposalModel.js';
import { Task } from '../models/taskModel.js';
import Company from '../models/companyModel.js';
import Rooms from '../models/roomModel.js';
import templateProposal from '../constants/proposalTemplate.js';

export async function getAllAttempts(req, res) {
  try {
    const attempts = await Attempt.find();
    if (!attempts) {
      return res.status(404).json({ message: 'No attempts found' });
    }
    return res.status(200).json({
      attempts,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getAttemptById(req, res) {
  try {
    const { id } = req.params;
    const attempt = (await Attempt.findById(id)).toJSON();
    const processedAttempt = {
      ...attempt,
      tasks: attempt.tasks.filter((task) => task.sendToClient),
    };
    if (!processedAttempt) {
      return res.status(404).json({ message: 'No attempt found with that ID' });
    }
    return res.status(200).json({
      attempt: processedAttempt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createAttempt(req, res) {
  try {
    const { userId, companyId } = req.body;
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 60 * 60000);
    const duration = endTime.getMinutes() - startTime.getMinutes();
    const attempt = await Attempt.create({
      userId,
      companyId,
      startTime,
      endTime,
      duration,
      isStarted: false,
      currentMainTaskId: 0,
      // completedTime,
      // scores,
      // session
    });
    const placeholderUserId = '64a3c4a23510c42f08bb4344';

    const companyPlaceholderId = '64e44676c2cdfcdaf88d0aec'; // from req

    // create an attempt
    // get the npcs of the company
    // ['64d9a4c5dc8df46458b6e872', '64d9a5c9dc8df46458b6e874', '64d9a716dc8df46458b6e878']
    const company = await Company.findById(companyPlaceholderId);
    const companyNPCs = company.NPCs;

    //copy tasks from company to attempt
    attempt.tasks = company.tasks.map((task) => ({
      ...task,
      sendToClient: false,
      active: false,
      completed: false,
    }));

    attempt.modules = company.initialModules;
    attempt.offices = company.initialOffices;
    attempt.chats = company.initialChats;
    attempt.clues = company.initialClues;

    attempt.save();

    // make chatrooms from the npcs and attach attemptId to it
    await Promise.all(
      companyNPCs.map(async (_npcId) => {
        await Rooms.create({
          attemptId: attempt._id,
          npcId: _npcId,
          company: companyPlaceholderId,
        });
      })
    );

    await Proposal.create({
      title: 'Amazing Apparel Customer Service Proposal',
      attemptId: attempt._id,
      slides: templateProposal,
      thumbnailUrl:
        'https://d2cgute8qahbr9.cloudfront.net/accenture/accenture-template-1.png',
    });

    return res.status(201).json({
      attempt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function completeTask(req, res) {
  try {
    const { id, taskId } = req.params;
    const attempt = await Attempt.findById(id);
    if (!attempt) {
      return res.status(404).json({ message: 'No attempt found with that ID' });
    }

    const task = attempt.taskIds.find(
      (tasks) => tasks.taskId.toString() === taskId
    );
    if (!task) {
      return res.status(404).json({
        message: 'No task found with that ID in the attempt',
      });
    }

    task.complete = true;
    await attempt.save();

    return res.status(200).json({
      attempt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteAttempt(req, res) {
  try {
    const { id } = req.params;
    const attempt = await Attempt.findByIdAndDelete(id);
    if (!attempt) {
      return res.status(404).json({ message: 'No attempt found with that ID' });
    }
    return res.status(200).json({
      message: 'Attempt successfully deleted',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateAttempt(req, res) {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found.' });
    }

    const sessionDuration = Date.now() - task.startTime;

    task.duration += sessionDuration;

    await task.save();

    return res.status(200).json({
      task: task,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
