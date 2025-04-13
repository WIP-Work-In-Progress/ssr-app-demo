const User = require("../../models/userModel");

const index = (req, res) => {
  res.render("home", {
    title: "Demo Express",
    message: "Siemanko!",
    users: User.getAll(),
  });
};

const create = (req, res) => {
  try {
    const { username } = req.body;
    User.create(username);
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  index,
  create,
};
