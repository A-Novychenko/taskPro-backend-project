const {HttpError} = require("../../helpers");
const {Column} = require("../../models/task");

const deleteColumn = async (req, res) => {
  const {columnId} = req.params;
  const result = await Column.findByIdAndRemove(columnId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({message: "Column Delete"});
};

module.exports = deleteColumn;
