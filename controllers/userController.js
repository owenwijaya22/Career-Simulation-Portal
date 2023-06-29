const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Missing Fields' });
    }

    const user = await User.create({
      email: email,
      password: password,
    });

    return res.status(201).json({
      status: 'success',
      data: {
        user: user,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { roomId } = req.params;
    const users = await User.find({ roomId });

    return res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        email,
        password,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.status(200).json({
      status: 'success',
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.status(204).json({
      status: 'success',
      message: 'User deleted',
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
};
