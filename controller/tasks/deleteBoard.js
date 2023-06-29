const {HttpError} = require("../../helpers");
const {Board} = require("../../models/task");

const deleteBoard = async (req, res) => {
  const {boardId} = req.params;
  const result = await Board.findByIdAndRemove(boardId);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({status: "success", code: 200, message: "Board deleted"});
};

module.exports = deleteBoard;
