const {controllerWrapper} = require("../../helpers");

const addTask = require("./addTask");

module.exports = {
  addTask: controllerWrapper(addTask),
};
