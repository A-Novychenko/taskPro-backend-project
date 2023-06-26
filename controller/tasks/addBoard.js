const {Board} = require("../../models/task");

const addBoard = async (req, res) => {
  const {_id: owner} = req.user;
  const board = await Board.create({...req.body, owner});
  // res.status(201).json(result);
  res.json({
    status: "create",
    code: 201,
    board,
  });
};

module.exports = addBoard;
