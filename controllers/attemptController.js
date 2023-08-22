import mongoose from 'mongoose';
import Attempt from '../models/attemptModel.js';
import { Task } from '../models/taskModel.js';

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
    const attempt = await Attempt.findById(id);
    if (!attempt) {
      return res.status(404).json({ message: 'No attempt found with that ID' });
    }
    return res.status(200).json({
      attempt,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function createAttempt(req, res) {
  try {
    const { userId, companyId, completedTime, scores, session} = req.body;
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 60 * 60000);
    const duration = endTime.getMinutes() - startTime.getMinutes();
    const attempt = await Attempt.create({
      userId,
      companyId,
      startTime,
      endTime,
      duration,
      completedTime,
      scores,
      session
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
