import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'user must have an email'],
      unique: true,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    username: {
      type: String,
      required: [true, 'user must have a username'],
      unique: true,
    },
    // to be added later
  },
  {
    timestamps: true,
  }
);

const User = model('User', userSchema);

export default User;
