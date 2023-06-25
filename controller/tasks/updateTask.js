const {HttpError} = require("../../helpers");
const {Task} = require("../../models/task");

const updateTask = async (req, res) => {
  const {taskId} = req.params;
  const result = await Task.findByIdAndUpdate(taskId, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateTask;
