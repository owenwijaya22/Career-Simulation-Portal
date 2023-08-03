import User from '../models/userModel.js';

export async function createUser(req, res) {
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
      user: user,
    });
  } catch (error) {
    return res.status(400).json({ message: 'Error' });
  }
}

export async function getAllUsers(req, res) {
  try {
    const users = await User.find();

    return res.status(200).json({
      users,
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
}

export async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    console.log(id);
    const updatedUser = await User.findByIdAndUpdate(id, {
      email,
      password,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.status(200).json({
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'No user found with that ID' });
    }

    return res.status(204).json({
      message: 'User deleted',
    });
  } catch (error) {
    return res.status(404).json({ message: 'Error' });
  }
}
