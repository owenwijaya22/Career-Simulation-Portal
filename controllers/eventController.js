import UserEvent from "../models/eventModel";

const updateEvent = async (req, res) => {
  try{
    const { eventType, companyId } = req.body;

    const event = await UserEvent.findOne({ companyId, eventType });
    const { systemEvents } = event;
    const resData = {}
    for(var i=0;i<systemEvents.length;i++){
      const eventType=systemEvents[i];
      if(eventType=="UPDATE_TASKID"){
        const task = await updateTaskIdEvent(element.newTaskId);
        resData["task"] = task;
      }
      else if(eventType=="UPDATE_STATES"){
        await updateStateEvent(element);
      }
    }
    // systemEvents.forEach(element => {
    //   const { eventType } = element;
    //   switch (eventType) {
    //     case "UPDATE_TASKID":
    //       const task = await updateTaskIdEvent(element.newTaskId);
    //       resData["task"] = task;
    //       break;
    //     case "UPDATE_STATES":
    //       await updateStateEvent(element);
    //       break;
    //     default:
    //       break;
    //   }
    // });
  
  }catch (error) {
    res.status(500).json({ message: error.message });
}
};
 