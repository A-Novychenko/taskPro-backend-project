const {HttpError} = require("../../helpers");
const {Column} = require("../../models/task");

const deleteColumn = async (req, res) => {
  const {columnId} = req.params;
  const result = await Column.findByIdAndRemove(columnId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({status: "success", code: 200, message: "Column deleted"});
};

module.exports = deleteColumn;
