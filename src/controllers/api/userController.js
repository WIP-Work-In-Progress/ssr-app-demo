const User = require("../../models/userModel");

const getAll = (req, res) => {
  try {
    const users = User.getAll();
    if (!users) {
      return res.status(404).json({ message: "Nie znaleziono nikogo..." });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getByUsername = (req, res) => {
  try {
    const user = User.getByUsername(req.params.username);
    if (!user) {
      return res.status(404).json({ message: "Nie ma takiego ktosia!" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const create = (req, res) => {
  try {
    const { username } = req.body;
    const user = User.create(username);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getByUsername,
  create,
};
