const {HttpError} = require("../../helpers");
const {Task} = require("../../models/task");

const deleteTask = async (req, res) => {
  const {taskId} = req.params;
  const result = await Task.findByIdAndRemove(taskId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({message: "Task Delete"});
};

module.exports = deleteTask;
