import { Types } from 'mongoose';
import { Task, TaskTemplate } from '../models/taskModel.js';

export async function createTask(req, res) {
  try {
    const { title, description, companyId, taskType, templates } =
      req.body;
    const newTask = new Task({
      title,
      description,
      companyId,
      taskType,
    });
    const existingTasks=await Task.find({companyId:companyId}).sort({order:-1});
    // if(!existingTasks){
    //   newTask.order.push(1);
    // }
    // else{
    //   const existingTasksdesc=existingTasks.sort((a, b) => b.order - a.order);
    //   const currentTask=existingTasksdesc[0].order;
    //   newTask.order.push(currentTask);
    // }     
    
    if(existingTasks.length>0){
      const currentTask=existingTasks[0].order+1;
      newTask.order=currentTask;
    }     
    else{
      newTask.order=1;
    }
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
      newTask,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getCompanyTasks(req, res) {
  try {
    const tasks = await Task.find({ companyId: req.params.companyId });
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
