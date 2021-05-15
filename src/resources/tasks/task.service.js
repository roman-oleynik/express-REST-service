const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const get = (id) => tasksRepo.get(id);
const add = board => tasksRepo.add(board);
const put = (id, board) => tasksRepo.put(id, board);
const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, get, add, put, remove };
