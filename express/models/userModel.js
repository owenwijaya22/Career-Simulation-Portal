const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  //to be added later
  // chatrooms: {
  //     type: Schema.Types.ObjectId,
  // },
  // prompts: {
  //     type: Schema.Types.ObjectId,
  //   },
  // tasks: [
  //   {
  //     type: Schema.Types.ObjectId,
  //   }
  // ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
