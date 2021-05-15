const { users, tasks } = require("../../data/data");

const getAll = async () => 
  // TODO: mock implementation. should be replaced during task development
   [...users]
;

const get = id => users.find(el => el.id === id);

const add = async user => {
  users.push(user);
  return user;
};

const put = async (id, user) => {
  const indexOfUserById = users.findIndex(el => el.id === id);
  users[indexOfUserById] = user;
  return user;
};

const remove = async id => {
  const indexOfUserById = users.findIndex(el => el.id === id);
  users.splice(indexOfUserById, 1);
<<<<<<< HEAD
  tasks.map(el => {
=======
  tasks.forEach(el => {
>>>>>>> tasks-board-deletion
    if (el.userId === id) {
      el.userId = null;
    }
    return el;
  })
  return {};
};

module.exports = { getAll, get, add, put, remove };
