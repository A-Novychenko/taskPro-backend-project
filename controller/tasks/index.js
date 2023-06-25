const {controllerWrapper} = require("../../helpers");

const addTask = require("./addTask");
const getAllBoards = require("./getAllBoards");
const addBoard = require("./addBoard");
const updateBoard = require("./updateBoard");
const deleteBoard = require("./deleteBoard");
const getColumns = require("./getColumns");
const addColumn = require("./addColumn");
const updateColumn = require("./updateColumn");
const deleteColumn = require("./deleteColumn");
const getTasks = require("./getTasks");
// const updateTask = require("./updateTask");
// const deleteTask = require("./deleteTask");

module.exports = {
  addTask: controllerWrapper(addTask),
  getAllBoards: controllerWrapper(getAllBoards),
  addBoard: controllerWrapper(addBoard),
  updateBoard: controllerWrapper(updateBoard),
  deleteBoard: controllerWrapper(deleteBoard),
  getColumns: controllerWrapper(getColumns),
  addColumn: controllerWrapper(addColumn),
  updateColumn: controllerWrapper(updateColumn),
  deleteColumn: controllerWrapper(deleteColumn),
  getTasks: controllerWrapper(getTasks),
  // updateTask: controllerWrapper(updateTask),
  // deleteTask: controllerWrapper(deleteTask),
};
