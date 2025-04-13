const index = (req, res) => {
  res.render("home", { title: "Moja strona", message: "Witaj w Express!" });
};

module.exports = {
  index,
};
