import Attempt from "../models/attemptModel";

export async function getAllAttempts(req, res) {
    try {
        const attempts = await Attempt.find();
        if (!attempts) {
        return res
            .status(404)
            .json({ status: "error", message: "No attempts found" });
        }
        return res.status(200).json({
        status: "success",
        data: {
            attempts,
        },
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

export async function getAttemptById(req, res) {
    try {
        const { id } = req.params;
        const attempt = await Attempt.findById(id);
        if (!attempt) {
        return res
            .status(404)
            .json({ status: "error", message: "No attempt found with that ID" });
        }
        return res.status(200).json({
        status: "success",
        data: {
            attempt,
        },
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

export async function createTask(req, res) {
    try {
      const { title, description, completed, company, taskType, templates } = req.body;
      const newTask = new Task({ title, description, completed, company, taskType });
      
      templates.forEach((template, index) => {
        const newTemplate = new TaskTemplate({
          _id: new mongoose.Types.ObjectId(),
          title: template.title,
          desc : template.desc,
          order: index+1,
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

  
export async function createAttempt(req, res) {
    try {
        if (
        !req.body.userId ||
        !req.body.companyId ||
        !req.body.taskIds
        ) {
        return res
            .status(400)
            .json({ status: "error", message: "Missing Fields" });
        }
        const {userId, companyId, startTime, endTime, taskIds} = req.body;
        const newAttempt = new Attempt({ userId, companyId, startTime, endTime });
        taskIds.forEach((taskId) => {
            newAttempt.taskIds.push({ taskId, complete: false });
        });
        await newAttempt.save();

        // Populate the taskIds field
        const populatedAttempt = await Attempt.findById(newAttempt._id).populate('taskIds.taskId');
        return res.status(201).json({
        status: "success",
        data: {
            populatedAttempt,
        },
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

export async function completeTask(req, res) {
    try {
        const { id, taskId } = req.params;
        const attempt = await Attempt.findById(id);
        if (!attempt) {
            return res
                .status(404)
                .json({ status: "error", message: "No attempt found with that ID" });
        }

        const task = attempt.taskIds.find(task => task.taskId.toString() === taskId);
        if (!task) {
            return res
                .status(404)
                .json({ status: "error", message: "No task found with that ID in the attempt" });
        }

        task.complete = true;
        await attempt.save();

        return res.status(200).json({
            status: "success",
            data: {
                attempt,
            },
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}

 

export async function deleteAttempt(req, res) {
    try {
        const { id } = req.params;
        const attempt = await Attempt.findByIdAndDelete(id);
        if (!attempt) {
            return res
                .status(404)
                .json({ status: "error", message: "No attempt found with that ID" });
        }
        return res.status(200).json({
            status: "success",
            message: "Attempt successfully deleted",
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
}
