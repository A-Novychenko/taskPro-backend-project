const { Board } = require("../../models/task");

const deleteBoard = async(req, res) => {
    const { boardId } = req.params; 
    const result = await Board.findByIdAndRemove(boardId); 
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json({message: "Board Delete"})
}

module.exports = deleteBoard;