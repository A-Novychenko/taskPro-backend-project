const {HttpError} = require("../../helpers");
const {Board} = require("../../models/task");

const addBoard = async (req, res) => {
  const {_id: owner} = req.user;
  const result = await Board.findOne({owner, title: req.body.title});

  if (result) {
    throw HttpError(409, "this board name already exists");
  }
  const board = await Board.create({...req.body, owner});

  res.json({
    status: "create",
    code: 201,
    board,
  });
};

module.exports = addBoard;
