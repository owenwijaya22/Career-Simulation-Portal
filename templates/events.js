const START_GAME_EVENT = {
  eventType: 'START_GAME',
  companyId: '',
  userId: '',
  conditions: [
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
    // mark event as started
  ],
};

//OFFICE
//CHAT
//CLUE
//PROPOSAL
