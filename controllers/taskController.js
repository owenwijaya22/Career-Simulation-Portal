import { Types } from 'mongoose';
import { Task, TaskTemplate } from '../models/taskModel.js';

export async function createTask(req, res) {
  try {
    const { title, description, completed, company, taskType, templates } =
      req.body;
    const newTask = new Task({
      title,
      description,
      completed,
      company,
      taskType,
    });

    templates.forEach((template, index) => {
      const newTemplate = new TaskTemplate({
        _id: new Types.ObjectId(),
        name: template.name,
        desc: template.desc,
        order: index + 1,
      });
      newTask.templates.push(newTemplate);
    });
    await newTask.save();

    return res.status(200).json({
      status: 'success',
      data: {
        newTask,
      },
    });
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}

export async function getCompanyTasks(req, res) {
  try {
    const tasks = await Task.find({ company: req.params.companyId });
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
}

export async function getTask(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
}

export async function updateTask(req, res) {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send();
  }
}
