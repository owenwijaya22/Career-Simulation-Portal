import UserEvent from "../models/eventModel";

const updateEvent = async (req, res) => {
  const { eventType, companyId } = req.body;

  const event = await UserEvent.findOne({ companyId, eventType });
  const { systemEvents } = event;
  const resData = {}
  systemEvents.forEach(element => {
    const { eventType } = element;
    switch (eventType) {
      case "UPDATE_TASKID":
        const task = await updateTaskIdEvent(element.newTaskId);
        resData["task"] = task;
        break;
      case "UPDATE_STATES":
        await updateStateEvent(element);
        break;
      default:
        break;
    }
  });

};
