import mongoose from 'mongoose';
import Attempt from '../models/attemptModel.js';
import { Task } from '../models/taskModel.js';

export async function getAllAttempts(req, res) {
  try {
    const attempts = await Attempt.find();
    if (!attempts) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No attempts found' });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        attempts,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function getAttemptById(req, res) {
  try {
    const { id } = req.params;
    const attempt = await Attempt.findById(id);
    if (!attempt) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No attempt found with that ID' });
    }
    return res.status(200).json({
      status: 'success',
      data: {
        attempt,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function createAttempt(req, res) {
  try {
    if (!req.body.userId || !req.body.companyId) {
      return res
        .status(400)
        .json({ status: 'error', message: 'Missing Fields' });
    }
    const { userId, companyId } = req.body;

    // retrieve all tasks for the company
    const tasks = await Task.find({
      company: new mongoose.Types.ObjectId(companyId),
    });
    if (!tasks || tasks.length === 0) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No tasks found for this company' });
    }

    // create a new attempt
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + 30 * 60000);
    const newAttempt = new Attempt({ userId, companyId, startTime, endTime });
    tasks.forEach((task) => {
      newAttempt.tasks.push({ taskId: task._id, complete: false });
    });

    await newAttempt.save();

    // Create the response to send the attempt data to frontend
    return res.status(201).json({
      status: 'success',
      data: {
        attempt: newAttempt,
        tasks,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function completeTask(req, res) {
  try {
    const { id, taskId } = req.params;
    const attempt = await Attempt.findById(id);
    if (!attempt) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No attempt found with that ID' });
    }

    const task = attempt.taskIds.find(
      (tasks) => tasks.taskId.toString() === taskId
    );
    if (!task) {
      return res.status(404).json({
        status: 'error',
        message: 'No task found with that ID in the attempt',
      });
    }

    task.complete = true;
    await attempt.save();

    return res.status(200).json({
      status: 'success',
      data: {
        attempt,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function deleteAttempt(req, res) {
  try {
    const { id } = req.params;
    const attempt = await Attempt.findByIdAndDelete(id);
    if (!attempt) {
      return res
        .status(404)
        .json({ status: 'error', message: 'No attempt found with that ID' });
    }
    return res.status(200).json({
      status: 'success',
      message: 'Attempt successfully deleted',
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function updateAttempt(req, res) {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Task not found.' });
    }

    const sessionDuration = Date.now() - task.startTime;

    task.duration += sessionDuration;

    await task.save();

    return res.status(200).json({
      status: 'success',
      data: {
        task: task,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}
