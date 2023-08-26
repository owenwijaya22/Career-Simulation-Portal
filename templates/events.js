const START_GAME_EVENT = {
  eventType: 'START_GAME',
  companyId: '',
  userId: '',
  conditions: [
    {
      //current taskId === "348765sjgkn"
    }
    //check the attempt is marked as started
  ],
  systemEvents: [
    {
      eventType: 'UNLOCK_TAB',
      tabType: 'OFFICE',
    },
    {
      eventType: 'CREATE_OFFICE',
      peopleKey: 'boss',
      templateId: 'boss1',
      status: {
        visible: true,
        alert: true,
        ping: true,
        active: true,
      },
    },
    {
      eventType: 'UPDATE_TASKS',
      taskId: 1,
      
    },
    
    // mark event as started
  ],
};

//OFFICE
//CHAT
//CLUE
//PROPOSAL


const taskState = [
  {
    id: "sdfsd",
    type: "MAIN",
    active: false,
    completed: true,
    taskDescription: ""
  },
  {
    id: 'sgds',
    type: "MAIN",
    active: false,
    completed: true
  },
  {
    id: 3,
    type: "MAIN",
    active: true,
    completed: true
  },
  {
    id: 1,
    type: "SIDE",
    active: false,
    completed: true
  },{
    id: 1,
    type: "MAIN",
    active: false,
    completed: true
  }
  {
    id: 1,
    type: "SIDE",
    active: false,
    completed: true
  }
]