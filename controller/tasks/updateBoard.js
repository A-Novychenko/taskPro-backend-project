const {HttpError} = require("../../helpers");
const {Board} = require("../../models/task");

const updateBoard = async (req, res) => {
  const {boardId} = req.params;
  const board = await Board.findByIdAndUpdate(boardId, req.body, {
    new: true,
    select: "-owner -createdAt -updatedAt",
  });
  if (!board) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "create",
    code: 201,
    message: "Board updated successfully",
    board,
  });
};

module.exports = updateBoard;
