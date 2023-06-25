const {HttpError} = require("../../helpers");
const {Board} = require("../../models/task");

const updateBoard = async (req, res) => {
  const {boardId} = req.params;
  const result = await Board.findByIdAndUpdate(boardId, req.body, {new: true});
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateBoard;
