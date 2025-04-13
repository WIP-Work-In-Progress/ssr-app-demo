const users = [
  {
    id: 1,
    username: "admin",
  },
  {
    id: 2,
    username: "user",
  },
];

const getAll = () => {
  return users.map(({ id, username }) => ({ id, username }));
};

const getByUsername = (username) => {
  return users.find((user) => user.username === username);
};

const create = (username) => {
  const newUser = {
    id: users.length + 1,
    username,
  };
  users.push(newUser);
  return newUser;
};

module.exports = {
  getAll,
  getByUsername,
  create,
};
