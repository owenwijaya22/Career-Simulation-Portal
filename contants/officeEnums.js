const officeSessionType = {
  status: {
    boss: {
      locked: Boolean,
      alert: Boolean,
      ping: Boolean,
      visible: Boolean,
      templateId: String, // TODO: change to Schema.Types.ObjectId when migrating event flow
    },
  },
};

export default officeSessionType;