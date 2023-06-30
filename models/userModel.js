import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // to be added later
  chatrooms: {
    type: Schema.Types.ObjectId,
  },
  messages: {
    type: Schema.Types.ObjectId,
  },
  tasks: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
});

const User = model('User', userSchema);

export default User;
